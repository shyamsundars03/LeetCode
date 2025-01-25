/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    

    let lar = -Infinity, seclar = -Infinity, thilar = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === lar || nums[i] === seclar || nums[i] === thilar) {
            continue;
        }

        if (nums[i] > lar) {
            thilar = seclar;
            seclar = lar;
            lar = nums[i];
        } else if (nums[i] > seclar) {
            thilar = seclar;
            seclar = nums[i];
        } else if (nums[i] > thilar) {
            thilar = nums[i];
        }
    }

    return thilar === -Infinity ? lar : thilar;



};