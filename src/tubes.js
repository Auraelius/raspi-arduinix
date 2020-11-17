/* 
 * some tubes have unique timing parameters
 * 
 * Currently supported tubes
 * NL8422/5991
 * 1N-17
 *  
 * */


export let tubeData = {
  nl8422: {
    minimumOnTime: 0.1,
    minPwmPeriod: 1,
  },
  n17: {
    minimumOnTime: 0.1,
    minPwmPeriod: 1,
  },
};
