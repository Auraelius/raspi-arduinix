# RASPI-ARDUINIX

A library for driving nixie tubes via arduinix for raspberry pi node projects.

Normally, the [arduinix](http://www.arduinix.com/) works with [arduino](https://www.arduino.cc/). I want to use it with raspberry pi. I'm not sure this is possible. I'd like to use it in a system that is also managing other devices and acting as a web server. Since the Linux OS I'm targeting isn't real-time, I'm not sure the device management I need is possible. But this is my attempt. Stay tuned.

## Hardware
The raspi drives the arduinix using its GPIO pins, via level-shifting circuits, to the arduinix's 8 bits of cathode and 4 bits of anode control lines. The timing of these signals is not critical but it has to happen in a given order and within relatively flexible time constraints. The the default connections appear below. 

-- TABLE NOT ACCURATE --

Raspi GPIO | Arduinix | function
---------- | -------- | --------
GPIO 02 | D 02 | tube select 0
GPIO 09 | D 03 | tube select 0
GPIO 11 | D 04 | tube select 0
GPIO 08 | D 05 | tube select 0
GPIO 07 | D 06 | digit 1 A
GPIO 05 | D 07 | digit 1 B
GPIO 08 | D 08 | digit 1 C
GPIO 16 | D 09 | digit 1 D
GPIO 04 | D 10 | digit 2 A
GPIO 14 | D 11 | digit 2 B
GPIO 15 | D 12 | digit 2 C
GPIO 17 | D 13 | digit 2 D

This assignment comes from the specific requirements of my raspi system and the devices it needs to interact with. Your system may be different. In some future iteration you will be able to specify your own pin mapping.

## Multiplexing

The arduinix is compact and can drive two tubes at one time. It can drive up to eight tubes. In order to light up all eight, we switch rapidly from one pair to the next fast than human persistance of vision. 

### Timing

To reduce perceivable flicker, we need to light each tube at least *25* times a second. Flicker can be fun in vintage settings, but it tires the eyes.

For eight tubes, this means we have to light up a new pair of tubes *100* times a second, or every 10mS.

We also want to set the intensity level of each digit independently. This requires using pulse-width modulation (PWN) of the anode control signals. The ideas is that at a duty cycle of 50%, the tube would appear half as bright.

However, nixie tubes require time to ignite once the voltage is applied. If we let the "on" time drop below this, they won't have time to ionize. Old data sheets recommend a minimum pulse width of *100uS*. Also, they continue to glow for a short time after the voltage is removed. We can take advantage of this. These parameters can change with different tubes. This was written for 1N-17 and NL8422/5991.

Again, our OS is not real time and, since we're using Node, we need to do all this asynchronously. We need to give node the opportunity to get other stuff done. All together, it will be interesting to see how consistent we can get with the raspi.



