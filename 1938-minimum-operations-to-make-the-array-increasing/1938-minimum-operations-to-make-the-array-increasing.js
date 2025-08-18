/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
        let c =0
    //[1,5,2,4,1]
    
    for(let i=0;i<nums.length;i++){
        
        if(nums[i]>=nums[i+1]){
            while(nums[i]>=nums[i+1]){
                nums[i+1]+= 1
                c++
                if(nums[i+1]> nums[i]){
                    break;
                }
            }
           
            
        }

    }
    
    return c
};