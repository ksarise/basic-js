const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(!typeof str === 'string') return false;
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const addition = options.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  let repeatAddition;
  let repeatStr;
    console.log(addition, additionRepeatTimes, additionSeparator, separator);
  repeatAddition = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    console.log(repeatAddition);
  repeatStr = new Array(repeatTimes).fill(str + repeatAddition).join(separator);
    console.log(repeatStr);

  return repeatStr;
}

module.exports = {
  repeater
};
