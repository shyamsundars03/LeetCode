/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let num
let res = nums.filter((val,ind)=> nums.indexOf(val)===ind && nums.lastIndexOf(val)===ind  )

return num = Number(res)


};