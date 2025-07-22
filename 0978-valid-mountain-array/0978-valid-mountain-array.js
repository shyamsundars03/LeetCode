/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3) return false;

    let peak = Math.max(...arr);
    let peakIndex = arr.indexOf(peak);


    if(peakIndex === 0 || peakIndex === arr.length - 1) return false;


    for(let i = 0; i < peakIndex; i++) {
        if(arr[i] >= arr[i+1]) return false;
    }

    for(let i = peakIndex; i < arr.length - 1; i++) {
        if(arr[i] <= arr[i+1]) return false;
    }

    return true;
};