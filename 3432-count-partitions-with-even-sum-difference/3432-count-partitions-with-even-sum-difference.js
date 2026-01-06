/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    
let c= 0

for(let i=1;i<nums.length;i++){

let a = nums.slice(0,i).reduce((a,c)=>a+c,0)
let b = nums.slice(i).reduce((a,c)=>a+c,0)
console.log(a)  
console.log(b)  

if(Math.abs(a-b)%2==0){
    c++
}




}



return c


};