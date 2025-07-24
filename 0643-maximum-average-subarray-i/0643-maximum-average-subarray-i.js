/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
        let windowSum = 0;

    // Calculate initial window sum
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        if (windowSum > maxSum) {
            maxSum = windowSum;
        }
    }

    let avg = maxSum / k;
    return Number(avg.toFixed(5));
};