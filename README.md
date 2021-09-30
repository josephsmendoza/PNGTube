# PNGTube
Become a PNGTuber without using Discord. Runs in OBS, based on mic activity level.
## Usage
For this to work as an OBS overlay you must add `--enable-media-stream` to your OBS args, as per [this thread](https://obsproject.com/forum/threads/browser-source-doesnt-allow-microphone-consent-dialogs.80260/). Then you can add the overlay using the url https://sugoidogo.github.io/PNGTube/. I recommend using the exact resolution of your images for the width and height to prevent aliasing. To show the "Interact" button you must have the overlay highlighted in your sources, and you can configure the overlay from there.

![example of overlay placement and interact button](example.png)

~~You can also set up [Virtual Audio Cable to use filtered OBS mic audio.](VirtualAutioCable.md)~~ You can install noise supression system-wide for free with a little tinkering, just read through [this reddit post](https://www.reddit.com/r/Twitch/comments/bjz5m2/finally_found_a_way_to_autobuild_noise_profiles/).

For animation, you could use an idle/blinking GIF for closed and a talking GIF for open.
