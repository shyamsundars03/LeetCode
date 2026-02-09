/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    
let arr = []


for(let i=0;i<nums.length;i++){

if(i==nums.length-1){
    arr.push(Math.abs(nums[0]-nums[i]))
}else{

arr.push(Math.abs(nums[i]-nums[i+1]))
}


}

console.log(arr)
return Math.max(...arr)

};