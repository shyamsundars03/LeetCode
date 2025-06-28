/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    
let index = nums.map((val , i ) => [val,i])

let sorted = index.sort((a,b)=> b[0]-a[0])

let sliced = sorted.slice(0,k)

let s = sliced.sort((a,b)=> a[1]- b[1])

return s.map((val)=> val[0])


};