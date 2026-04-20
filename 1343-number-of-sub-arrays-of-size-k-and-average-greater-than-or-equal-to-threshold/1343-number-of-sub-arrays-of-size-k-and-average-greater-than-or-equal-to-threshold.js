/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
    let windowSum = 0;
//gvgvvnbvbv
    const target = k * threshold;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    if (windowSum >= target) count++;

    for (let right = k; right < arr.length; right++) {

        windowSum += arr[right] - arr[right - k];
        if (windowSum >= target) count++;

    }

    return count;
};