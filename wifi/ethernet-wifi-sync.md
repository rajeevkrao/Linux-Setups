from manpage of Ubuntu for nmcli-examples https://manpages.ubuntu.com/manpages/focal/man7/nmcli-examples.7.html 

Example 14. there is a script to make Ethernet and Wi-Fi mutually exclusive

```
#!/bin/bash
export LC_ALL=C


enable_disable_wifi ()
{
    result=$(nmcli dev | grep "ethernet" | grep -w "connected")
    if [ -n "$result" ]; then
        nmcli radio wifi off
    else
        nmcli radio wifi on
    fi
}

if [ "$2" = "up" ]; then
    enable_disable_wifi
fi

if [ "$2" = "down" ]; then
    enable_disable_wifi
fi
```


   This dispatcher script makes Wi-Fi mutually exclusive with wired networking. When a wired
   interface is connected, Wi-Fi will be set to airplane mode (rfkilled). When the wired
   interface is disconnected, Wi-Fi will be turned back on. Name this script e.g.
   70-wifi-wired-exclusive.sh and put it into /etc/NetworkManager/dispatcher.d/ directory.
   See NetworkManager(8) manual page for more information about NetworkManager dispatcher
   scripts.
Make the new script executable: chmod a+rx /etc/NetworkManager/dispatcher.d/70-wifi-wired-exclusive.sh
