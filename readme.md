Basic Setups
====

Barrier
----
<h3>Sync Single Mouse and Keyboard for multiple Devices</h3>
<h4>Client Setup</h4>
Using Barrier as Startup with cli<br/>

`barrierc -n Laptop -f --enable-crypto 192.168.0.106`

Laptop - Screen Name <br/>
192.168.0.106 - Main Computer(Server) Local IP Address

VSFTPD
----
<h3>Vsftpd Configurations</h3>
Edit configuration file at /etc/vsftpd.conf (Install Sublime First)

Uncomment lines

`local_enable=YES`

`write_enable=YES`

Add line if error - 500 OOPS: priv_sock_get_cmd

`seccomp_sandbox=NO`

PulseAudio Bluetooth
-----
<h3>Pair Phone through bluetooth and listen its audio in linux</h3>
<h4>Packages to be installed</h4>

`sudo apt install bluez`
<h4>Enable Bluetooth Service</h4>

`sudo systemctl enable bluetooth`
<h4>Start Bluetooth Service</h4>

`sudo systemctl start bluetooth`
<h4>Other Packages required</h4>

`sudo apt install pulseaudio pulseaudio-utils pavucontrol pulseaudio-module-bluetooth`


If you add the pulseaudio-bluetooth package, then open `/etc/pulse/system.pa` or `~/.config/pulse/system.pa`(for logged in user only) and add the following two lines:

`load-module module-bluetooth-policy`<br/>
`load-module module-bluetooth-discover`<br/>
<h4>Run Command after editing the file</h4>

`sudo systemctl restart bluetooth`
then all you have to do is pair your phone to your computer. Then, when you play audio from your phone, it automatically plays on your computer as long as they're connected via bluetooth. It also seems to route call audio through your computer.<br/>
<a href="https://ostechnix.com/turn-your-linux-pc-into-bluetooth-speakers-for-your-phone/" target="_blank">Detailed Article</a>
