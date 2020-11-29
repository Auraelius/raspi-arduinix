

/*
  this should support the singleton pattern because there should be only one arduinix board and one currentTubes buffer

  by exporting an instance and relying on node's module cache to only instantiate once, we acheive "something very similar to the Singleton pattern." (Node.js Design Patterns, 2nd Ed. ) 

  (However, if some package inside node_modules also imports it, they will get their own instance and the hardware will be very confused. It's unlikely that any other package even knows about this unpublished module, so i'm not going to sweat it yet.
*/

import { numberOfTubes, tubeData } from './tubes.js';
import pinAssignments from './gpio.js';
const initialNixies = [
  {value:'0', intensity: 10},
  {value:'1', intensity: 10},
  {value:'2', intensity: 10},
  {value:'3', intensity: 10},
  {value:'4', intensity: 10},
  {value:'5', intensity: 10},
  {value:'6', intensity: 10},
  {value:'7', intensity: 10},
];

class Arduinix {
  constructor(tubeConfig, pinConfig) {
    setupHardware(pinConfig); // configure the raspberry pi
    startMultiplexer(numberOfTubes, tubeConfig); // including periodic tube refresh
  }
  // use a dummy value for tubes during tube startup
  // copy array of tube objects to create storage, not just reference
  static currentValue = copyTubeValues(initialNixies);

  static nextValue = undefined; // is set when there's new tube values

  static copyTubeValues(OriginalArray) {
    return OriginalArray.map((a) => {
      let newObj = {};
      Object.keys(a).forEach((propertyKey) => {
        newObj[propertyKey] = a[propertyKey];
      });
      return newObj;
    });
  }
  static setupHardware(pinConfig) {
    // set up raspberry pi pins
    // arduinix connections
    // servo-driven gauge connections
    // tuneForMax meter connection
    // LED connections
  }
  static startMultiplexer(numberOfTubes, tubeConfig) {
    let pairIndex = 0;
    let pairMax = numberOfTubes/2;

    // every pair interval, switch to the next pair
    // convert the pair values to BCD codes
    // convert the pair intensities to PWM values
    // incr pair counter

    // if the previous pair was the last one in the set,
    // set pair counter to 0;
    // check to see if there's a nextValue
    // if there is, copy the next value to the current value
    // and clear the next Value
  }

  setTubes(value) {
    // check size & format of tube data
    if (value.length != tubeData.numberOfTubes)
      throw 'value must match number of tubes';

    // if everything checks out,
    nextValue = copyTubeValues(value);
  }
};

export const nixies = new Arduinix(tubeData.nl8422, pinAssignments ); 
