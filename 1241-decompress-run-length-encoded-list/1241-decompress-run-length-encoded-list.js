/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    
    let a=[]
    for(let i=0;i<nums.length;i+=2){
        a.push(...Array(nums[i]).fill(nums[i+1]))
    }
    // console.log(a)
    return a





};