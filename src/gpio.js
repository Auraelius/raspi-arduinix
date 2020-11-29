/*
 * gpio setup
 *
 * if a gpio is marked unused, setup does not assign
 * 
 * */

export let gpioFor = {
  d02: '02',
  d03: '09',
  d04: '11',
  d05: '08',
  d06: '07',
  d07: '05',
  d08: '08',
  d09: '16',
  d10: '04',
  d11: '14',
  d12: '15',
  d13: '16'
};



// GPIO 02 | D 02 | tube select 0
// GPIO 09 | D 03 | tube select 1
// GPIO 11 | D 04 | tube select 2
// GPIO 08 | D 05 | tube select 3
// GPIO 07 | D 06 | digit 1 A
// GPIO 05 | D 07 | digit 1 B
// GPIO 08 | D 08 | digit 1 C
// GPIO 16 | D 09 | digit 1 D
// GPIO 04 | D 10 | digit 2 A
// GPIO 14 | D 11 | digit 2 B
// GPIO 15 | D 12 | digit 2 C
// GPIO 17 | D 13 | digit 2 D