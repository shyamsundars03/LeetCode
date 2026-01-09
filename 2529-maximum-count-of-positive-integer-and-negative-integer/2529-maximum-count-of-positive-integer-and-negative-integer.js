/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    
let pos = 0
let neg = 0

for(let val of nums){
    if(val<0){
        neg++
    }else if(val>0){
        pos++
    }
}

return Math.max(neg,pos)



};