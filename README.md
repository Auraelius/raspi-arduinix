# RASPI-ARDUINIX

A library for driving nixie tubes via arduinix for raspberry pi node projects.

Normally, the [arduinix](http://www.arduinix.com/) works with [arduino](https://www.arduino.cc/). I want to use it with raspberry pi. I'm not sure this is possible. I'd like to use it in a system that is also managing other devices and acting as a web server. Since the Linux OS I'm targeting isn't real-time, I'm not sure the device management I need is possible. But this is my attempt. Stay tuned.

## Hardware
The raspi drives the arduinix using its GPIO pins, via level-shifting circuits, to the arduinix's 8 bits of cathode and 4 bits of anode control lines. The timing of these signals is not critical but it has to happen in a given order and within relatively flexible time constraints. The the default connections appear below. 

Raspi GPIO | Arduinix 
-----------| --------
GPIO 02 | D 02
GPIO 09 | D 03
GPIO 11 | D 04
GPIO 08 | D 05
GPIO 07 | D 06
GPIO 05 | D 07
GPIO 08 | D 08
GPIO 16 | D 09
GPIO 04 | D 10
GPIO 14 | D 11
GPIO 15 | D 12
GPIO 17 | D 13

This assignment comes from the specific requirements of my raspi system and the devices it needs to interact with. Your system may be different. In some future iteration you will be able to specify your own pin mapping.

## Multiplexing
