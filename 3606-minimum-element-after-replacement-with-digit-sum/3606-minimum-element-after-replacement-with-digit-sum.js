/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
        let res = Infinity
    
    
    for(let i=0;i<nums.length;i++){
        let a = String(nums[i]).split("").reduce((a,c)=>Number(a)+Number(c),0)
        // console.log(a)
        if(Number(a)<res){
            res = Number(a)
        }
    }
    
    return res
};