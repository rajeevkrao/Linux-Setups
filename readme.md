Basic Setups
====

Barrier
----
<h3>Sync Single Mouse and Keyboard for multiple Devices</h3>
<h4>Client Setup</h4>
Using Barrier as Startup with cli<br/>
`barrier.barrierc -n Laptop -f --enable-crypto 192.168.0.106`

Laptop - Screen Name
192.168.0.106 - Main Conputer(Server) Local IP Address

PulseAudio Bluetooth
-----
<h3>Pair Phone through bluetooth and listen its audio in linux</h3>

If you add the pulseaudio-bluetooth package, then open `/etc/pulse/system.pa` or `~/.config/pulse/system.pa`(for logged in user only) and add the following two lines:

`load-module module-bluetooth-policy`<br/>
`load-module module-bluetooth-discover`<br/>
then all you have to do is pair your phone to your computer. Then, when you play audio from your phone, it automatically plays on your computer as long as they're connected via bluetooth. It also seems to route call audio through your computer.
