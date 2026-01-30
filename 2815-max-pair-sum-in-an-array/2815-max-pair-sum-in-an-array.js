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
    

//    let sorted = nums.sort((a, b) => b - a); 
//     let ans = -1;

//     for (let i = 0; i < sorted.length; i++) {
//         let maxV = Math.max(...String(sorted[i]).split("").map(Number));
//         console.log(maxV)
//         let sameDigitNums = sorted.filter((num) => {
//             let digit = Math.max(...String(num).split("").map(Number));
//             return digit === maxV;
//         });
//         console.log(sameDigitNums)
//         if (sameDigitNums.length > 1) {
//             ans = Math.max(ans, sameDigitNums[0] + sameDigitNums[1]);
//         }
//     }

//     return ans;



};