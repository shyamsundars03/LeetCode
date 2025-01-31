/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   
   
   return res= nums.filter((val,ind)=> nums.indexOf(val)===ind && nums.lastIndexOf(val)===ind ).reduce((a,c)=>a+c,0)
};