/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {



    let arr =[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]<k){
            arr.push(nums[i])
        }
    }

return arr.length



};