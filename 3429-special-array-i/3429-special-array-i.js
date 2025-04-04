/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
      if(nums.length===1) return true
    let pairs=true
    for(let i=0;i<nums.length-1;i++){
       if(nums[i]%2===0 && nums[i+1]%2==0){
           pairs = false
       }else if(nums[i]%2!==0 && nums[i+1]%2!==0){
           pairs = false
       }
    }
    return pairs 

};