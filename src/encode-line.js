const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!typeof str === 'string') {
    return '';
  }
  let count = 1;
  let result = '';
  
  for (let i = 1; i <= str.length; i++) {
      console.log('str', i, str[i], str[i-1]);
    if (str[i] === str[i - 1]) {
      count++;
    } else if (count > 1){
      result += count + str[i - 1];
      count = 1;
    } else {
        result += str[i-1];
        count = 1;
    }
    console.log('count', count);
    console.log('result', result);
  }
  return result;
}

module.exports = {
  encodeLine
};
