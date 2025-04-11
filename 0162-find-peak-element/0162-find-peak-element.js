/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    maxi = Math.max(...nums)
    return nums.indexOf(maxi)
};