/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
        let max = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let k = i;
            let l = j;
            let count = 0;
            while (k < nums1.length && l < nums2.length && nums1[k] === nums2[l]) {
                k++;
                l++;
                count++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
};