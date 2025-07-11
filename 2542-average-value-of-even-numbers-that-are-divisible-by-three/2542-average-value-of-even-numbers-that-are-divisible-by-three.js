/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
let even = nums.filter((val)=> val%2==0 && val%3==0)

if(even.length==0)return 0

let res = Math.floor(even.reduce((a,c)=>a+c,0) / even.length )


return res


};