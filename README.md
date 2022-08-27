# Archived
TL;DR: [use pngtube v4](https://github.com/sugoidogo/pngtube2)  
I've noticed people are starting to star this project on github, but this version of this software is out of development. I created a seperate repo for pngtube v2 because it depends on an additional script I wrote and had it's own host of issues compared to this version. However, I since realized that the script I wrote was simply an alternate implementation of fucntionality already availible in the obs-websocket plugin, which was merged for OBS 28. Pngtube v4 now uses that plugin, requiring no additional installation on OBS 28+. As of writing, the current version of OBS is 27, requiring you install the websocket plugin, but having far better functionality.
# PNGTube
Become a PNGTuber without using Discord. Runs in OBS using voice activation.
## Usage
For this to work as an OBS overlay you must add `--enable-media-stream` to your OBS launch paramaters, as per [this thread](https://obsproject.com/forum/threads/browser-source-doesnt-allow-microphone-consent-dialogs.80260/post-521079). Then you can add this overlay using the url https://sugoidogo.github.io/PNGTube/. I recommend using 1080 by 1080 for the width and height, but your image will scale to whatever resoltion you use. To show the "Interact" button like in the picture below you must have the brouser source selected in your sources list, and you can configure the overlay from there.

![example of overlay placement and interact button](example.png)

Please note that PNGTube can only use your default mic. If your mic has too much static for the overlay to reliably detect your voice, you can install noise supression system-wide using [Equalizer APO](https://sourceforge.net/projects/equalizerapo/) with the [RNNoise](https://github.com/werman/noise-suppression-for-voice) plugin. Here's a [detailed guide.](https://medium.com/@bssankaran/free-and-open-source-software-noise-cancelling-for-working-from-home-edb1b4e9764e)

If you need any help, join the [discord](https://discord.gg/zxDnYSvMNw)
