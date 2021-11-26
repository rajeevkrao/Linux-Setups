Barrier
----
Using Barrier as Startup with cli<br/>
`barrier.barrierc -n Laptop -f --enable-crypto 192.168.0.106`

Laptop - Screen Name
192.168.0.106 - Main Conputer(Server) Local IP Address

PulseAudio Bluetooth
-----
<h3>Pair Phone through bluetooth and listen its audio in linux</h3>

I don't know how many of you knew this, but I certainly didn't and it can come in quite handy during quarantine. It all seems to be automatic on Arch, so I imagine it is on most distros.

If you add the pulseaudio-bluetooth package, then open /etc/pulse/system.pa and add the following two lines:

`load-module module-bluetooth-policy`<br/>
`load-module module-bluetooth-discover`<br/>
then all you have to do is pair your phone to your computer. Then, when you play audio from your phone, it automatically plays on your computer as long as they're connected via bluetooth. It also seems to route call audio through your computer.
