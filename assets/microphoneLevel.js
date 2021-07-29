let sClosed = "spriteClosed.png";
let sOpen = "spriteOpen.png";
let volumeThreshold = 45;
let local = window.localStorage;

function setClosed(input) {
  let reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      sClosed = reader.result;
      local.setItem("closed",sClosed);
    },
    false
  );
  reader.readAsDataURL(input);
}

function setOpen(input) {
  let reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      sOpen = reader.result;
      local.setItem("open", sOpen);
    },
    false
  );
  reader.readAsDataURL(input);
}

if (local.getItem("open") !== null) {
  sOpen = local.getItem("open");
}
if (local.getItem("closed") !== null) {
  sClosed = local.getItem("closed");
}
if (local.getItem("volume") !== null) {
  volumeThreshold = parseInt(local.getItem("volume"));
  document.getElementById("myRange").value=volumeThreshold+"";
}
// Original microphone control code taken from StackOverflow, written by user 'Minding'
window.onload = function () {
  (async () => {
    let volumeCallback = null;
    let volumeInterval = null;
    const volumeVisualizer = document.getElementById("volume-visualizer");

    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
        },
      });
      const audioContext = new AudioContext();
      const audioSource = audioContext.createMediaStreamSource(audioStream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;
      analyser.minDecibels = -127;
      analyser.maxDecibels = 0;
      analyser.smoothingTimeConstant = 0.4;
      audioSource.connect(analyser);
      const volumes = new Uint8Array(analyser.frequencyBinCount);
      volumeCallback = () => {
        analyser.getByteFrequencyData(volumes);
        let volumeSum = 0;
        for (const volume of volumes) volumeSum += volume;
        const averageVolume = volumeSum / volumes.length;
        // Value range: 127 = analyser.maxDecibels - analyser.minDecibels;
        volumeVisualizer.style.setProperty(
          "--volume",
          (averageVolume * 100) / 127 + "%"
        );
        let currentVolume = averageVolume * (100 / 127);
        volumeThreshold = document.getElementById("myRange").value;
        local.setItem("volume", volumeThreshold);
        document.getElementById("sliderValue").innerText = volumeThreshold;
        if (currentVolume <= volumeThreshold) {
          document.getElementById("sprite").src = sClosed;
          document
            .getElementById("sprite")
            .style.setProperty("filter", "brightness(90%)");
        } else {
          document.getElementById("sprite").src = sOpen;
          document
            .getElementById("sprite")
            .style.setProperty("filter", "brightness(100%)");
        }
      };
    } catch (e) {
      console.error(
        "Failed to initialize volume visualizer, simulating instead...",
        e
      );
      // Simulate volume bar
      let lastVolume = 50;
      volumeCallback = () => {
        const volume = Math.min(
          Math.max(Math.random() * 100, 0.8 * lastVolume),
          1.2 * lastVolume
        );
        lastVolume = volume;
        volumeVisualizer.style.setProperty("--volume", volume + "%");
      };
    }
    if (volumeCallback !== null && volumeInterval === null)
      volumeInterval = setInterval(volumeCallback, 100);
  })();
};
