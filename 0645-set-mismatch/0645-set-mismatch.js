/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
let n= nums.length

let a= nums.reduce((a,b)=> a+b,0)

let b = [...new Set(nums)].reduce((a,b)=> a+b,0)

let s= n*(n+1)/2

return [a-b,s-b]



};