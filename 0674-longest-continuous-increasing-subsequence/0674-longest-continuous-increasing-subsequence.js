/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    
let arr = []
let a = []
for(let i=0;i<nums.length;i++){
    if(nums[i]<nums[i+1]){
        arr.push(nums[i])
    }else{
        arr.push(nums[i])
        
        a.push(arr)
        arr = []
    }
}

// console.log(a)

a.sort((a,b)=>b.length - a.length)
return a[0].length


};