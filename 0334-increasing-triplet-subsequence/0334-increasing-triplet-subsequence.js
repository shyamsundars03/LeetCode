/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    let fir = Infinity, sec = Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= fir) {
            fir = nums[i]
        } else if (nums[i] <= sec) {
            sec = nums[i]
        } else {
            return true
        }
    }
    return false









};