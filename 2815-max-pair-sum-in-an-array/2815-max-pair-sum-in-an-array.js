/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
      
     const map = new Map(); // digit -> [largest, secondLargest]

  for (const num of nums) {
    const maxDigit = Math.max(...String(num).split('').map(Number));

    if (!map.has(maxDigit)) {
      map.set(maxDigit, [num]);
    } else {
      map.get(maxDigit).push(num);
    }
  }

  let res = -1;

  for (const values of map.values()) {
    if (values.length >= 2) {
      values.sort((a, b) => b - a);
      res = Math.max(res, values[0] + values[1]);
    }
  }

  return res;
    
};