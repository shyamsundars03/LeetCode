/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
let res = nums.map((val)=> val*val).sort((a,b)=> a-b,0)

return res

};