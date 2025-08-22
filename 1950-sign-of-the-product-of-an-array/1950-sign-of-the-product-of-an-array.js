/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
        let res = 1
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            return 0
        }else{
            res*=nums[i]
            
        }
    }
    
    return res<0? -1: 1
};