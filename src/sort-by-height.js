const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  console.log(arr);
  let sortArr = arr
  .filter(value => value !== -1)
  .sort((a, b) => b - a);//inc
  console.log(sortArr);
  for (let i = 0; i < arr.length; i++) {
      console.log('arr',arr[i], i);
      if (arr[i] !== -1) {
      arr[i] = sortArr.pop();
      console.log('poped',arr[i], i);
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
