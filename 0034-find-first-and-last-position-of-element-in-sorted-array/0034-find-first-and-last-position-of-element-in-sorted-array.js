/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
        let arr =[]
    for(let i=0;i<nums.length;i++){
        
        if(nums[i]===target){
            arr.push(i)
        }
 
    }
    if(arr.length==0){
        return [-1,-1]
    }else{
        return [arr[0],arr[arr.length-1]]
    }
    
    
    
};