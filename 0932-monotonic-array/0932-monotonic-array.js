/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {

let inc = 1
let dec = 1


for(let i=0;i<nums.length;i++){
  
  
  if(nums[i] <= nums[i+1]){
    inc++
  }
  if (nums[i]>=nums[i+1]){
    dec++
  }
  
  
  
  
}
// console.log(inc)
// console.log(dec)
if(inc == nums.length){
  return true
}else if(dec == nums.length){
  return true
}else{
  return false
}
};