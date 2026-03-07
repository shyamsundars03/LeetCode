/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
     if (k < 0) return 0;

    const count = {};
    let uniquePairs = 0;

    // Count occurrences of each number
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    for (const num in count) {
        if (k === 0) {
          
            if (count[num] > 1) {
                uniquePairs += 1;
            }
        } else {
          
            if (count[Number(num) + k]) {
                uniquePairs += 1;
            }
        }
    }

    return uniquePairs;
};