const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  let result = [];
  console.log(arr);
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr.length; i += 1) {
      console.log('#', i, arr[i], arr[i + 1]);
      switch (arr[i]) {
        
        case doubleNext:
          if (i < arr.length - 1) {
            result.push(arr[i + 1]);
            console.log(result);
          }
          break;

        case doublePrev:
          if ((i > 0) && (arr[i - 2] !== discardNext)) {
            result.push(arr[i - 1]);
            console.log(result);
          }
          break;
          
        case discardNext:
          i += 1;
          break;
          
        case discardPrev:
          if ((i > 0) && (arr[i - 2] !== discardNext)) {
            result.pop();
            console.log(result);
          }
          break;

        default:
          result.push(arr[i]);
          console.log(result);
      }
    }
  return result; 
}

module.exports = {
  transform
};
