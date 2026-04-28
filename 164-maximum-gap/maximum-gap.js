/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
       
    nums.sort((a,b)=>a-b)
    console.log(nums)
    
    if(nums.length <2) return 0
    
    let res = 0
    
    for(let i=0;i<nums.length;i++){
        if(res < nums[i+1]-nums[i]){
            res = nums[i+1] -nums[i]
        }
    }
    
    return res
};