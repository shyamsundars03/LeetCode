/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
     nums.sort((a, b) => a - b); // Step 1: Sort the array
    let averages = [];

    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        let avg = (nums[left] + nums[right]) / 2;
        averages.push(avg);
        left++;
        right--;
    }

    return Math.min(...averages);
};