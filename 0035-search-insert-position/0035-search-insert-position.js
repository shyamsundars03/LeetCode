/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
               let res;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            // console.log(nums.indexOf(nums[i]))
            return nums.indexOf(nums[i])
        }else if(nums[i]!==target){
             res=nums.concat(target).sort((a,b)=>a-b)
            //  console.log(res.indexOf(target))
            return res.indexOf(target)
        }
        return 0
        
    }
    
    // for(let j=0;j<nums.length;j++){
    //     // if(nums[j]!==target){
    //     //      res=nums.concat(target).sort()
    //     //     //  console.log(res.indexOf(target))
    //     //     return res.indexOf(target)
    //     // }return 0
    // }
    // console.log(res)





};