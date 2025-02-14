/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {


return nums1.filter((num,ind)=> nums2.includes(num)&& nums1.indexOf(num)===ind)




};