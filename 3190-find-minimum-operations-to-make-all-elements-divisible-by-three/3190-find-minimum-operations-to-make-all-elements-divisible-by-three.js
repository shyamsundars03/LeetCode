/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
        let c = 0
    
    for(let val of nums){
        if(val%3!=0){
            c++
        }
    }
    
    return c
    
};