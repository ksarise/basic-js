const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  const digits = n.toString().split('').map(Number);
  let res = digits.slice(1).join('');
  let cur = 0;
  for (let i = 1; i < digits.length; i += 1) {
    cur = digits.slice(0, i). concat(digits.slice(i + 1)).join('');
    res = Math.max(res, cur);
  }
  return parseInt(res, 10);
}

module.exports = {
  deleteDigit
};
