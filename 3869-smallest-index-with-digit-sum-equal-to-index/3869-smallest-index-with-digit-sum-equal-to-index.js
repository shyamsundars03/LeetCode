/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
        let res = -1
    
    for(let i=0;i<nums.length;i++){
        let a = String(nums[i]).split("")
        let b = a.reduce((a,c)=>Number(a)+Number(c),0)
        // console.log("b",b)
        if(b==i){
            return res = i
        }
        
    }
    
    return res
};