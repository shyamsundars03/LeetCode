/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];

    for (const num of nums) {
        const len = res.length;
        for (let i = 0; i < len; i++) {
            res.push([...res[i], num])
        }
    }

    return res;
};