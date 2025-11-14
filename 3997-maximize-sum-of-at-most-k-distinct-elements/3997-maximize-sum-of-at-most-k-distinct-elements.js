/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
        nums =  [...new Set(nums)]

    nums.sort((a,b)=>b-a)    
    
    return nums.slice(0,k)
};