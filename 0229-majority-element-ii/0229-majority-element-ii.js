/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
        let n = nums.length/3
    let frq ={}
    
    for(let val of nums){
        frq[val] = (frq[val]  || 0)+1
        
    }
    // console.log(frq)
    let res = []
    for(let val in frq){
        if(frq[val]  > n){
            res.push(Number(val))
        }
    }
    
    // console.log(res)
    return res
};