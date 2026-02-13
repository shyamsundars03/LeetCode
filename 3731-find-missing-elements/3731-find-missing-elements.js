/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    
let res = []

let min =  Math.min(...nums)
let max =  Math.max(...nums)


let i=min

while(i<=max){
    
    if(!nums.includes(i)){
        res.push(i)
    }
    
    
    
    i++
}


return res



};