/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
        
    let maxi = 0
maxi = Math.max(...nums)

for(let i=0;i<nums.length;i++){
    if(maxi===nums[i]){
        return nums.indexOf(nums[i])
    }
}

};