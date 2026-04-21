/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    
    function mergeSort(arr) {
    // Base condition: single element is already sorted
    if (arr.length <= 1) return arr;

    // Divide
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Compare elements and merge
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Remaining elements
    return result
        .concat(left.slice(i))
        .concat(right.slice(j));
}

// Usage
// const arr = [8, 3, 5, 4, 7, 6, 1, 2];
return mergeSort(nums);



};