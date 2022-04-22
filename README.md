# PNGTube
Become a PNGTuber without using Discord. Runs in OBS using voice activation.
## Usage
For this to work as an OBS overlay you must add `--enable-media-stream` to your OBS launch paramaters, as per [this thread](https://obsproject.com/forum/threads/browser-source-doesnt-allow-microphone-consent-dialogs.80260/post-521079). Then you can add this overlay using the url https://sugoidogo.github.io/PNGTube/. I recommend using 1080 by 1080 for the width and height, but your image will scale to whatever resoltion you use. To show the "Interact" button like in the picture below you must have the brouser source selected in your sources list, and you can configure the overlay from there.

![example of overlay placement and interact button](example.png)

Please note that PNGTube can only use your default mic. If your mic has too much static for the overlay to reliably detect your voice, you can install noise supression system-wide using [Equalizer APO](https://sourceforge.net/projects/equalizerapo/) with the [RNNoise](https://github.com/werman/noise-suppression-for-voice) plugin. Here's a [detailed guide.](https://medium.com/@bssankaran/free-and-open-source-software-noise-cancelling-for-working-from-home-edb1b4e9764e)

If you need any help, join the [discord](https://discord.gg/zxDnYSvMNw)
