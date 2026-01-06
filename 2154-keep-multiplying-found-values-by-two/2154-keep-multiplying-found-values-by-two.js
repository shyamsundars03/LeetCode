/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
        
        
        for(let i=0;i<nums.length;i++){
            if(!nums.includes(original))break
            if(nums[i]== original){
                original = original*2
                return findFinalValue(nums,original)
            }
    }
    

    return original
};