/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
let arr = [...new Set(nums)]
    // console.log(arr)
    
    arr.sort((a,b)=>a-b)
    
let count=1   
let maxi= 1
if(arr.length===0) return 0

for(let i=0;i<arr.length;i++){

    
if(arr[i]===arr[i-1]+1){
        count++
        maxi= Math.max(maxi,count)
    }else{
        count=1
    }
   
}    

    return maxi



};