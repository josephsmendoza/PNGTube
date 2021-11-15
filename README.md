# PNGTube
Become a PNGTuber without using Discord. Runs in OBS using voice activation.
## Usage
For this to work as an OBS overlay you must add `--enable-media-stream` to your OBS launch paramaters, as per [this thread](https://obsproject.com/forum/threads/browser-source-doesnt-allow-microphone-consent-dialogs.80260/). Then you can add this overlay using the url https://sugoidogo.github.io/PNGTube/. I recommend using the exact resolution of your images for the width and height to prevent aliasing. To show the "Interact" button like in the picture below you must have the overlay selected in your sources, and you can configure the overlay from there.

![example of overlay placement and interact button](example.png)

If your mic has too much static for the overlay to reliably detect your voice, you can install noise supression system-wide using [Equalizer APO](https://sourceforge.net/projects/equalizerapo/) with the [RNNoise](https://github.com/werman/noise-suppression-for-voice) plugin.
