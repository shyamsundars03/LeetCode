/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    let frq = {};

    // build frequency map
    for (let val of nums) {
        frq[val] = (frq[val] || 0) + 1;
    }
    console.log(frq);

    // check if any frequency is prime
    for (let v in frq) {
        if (isP(frq[v])) return true;
    }

    return false;
};

// helper function to check prime
function isP(val) {
    if (val < 2) return false;
    if (val === 2) return true;
    if (val % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(val); i += 2) {
        if (val % i === 0) return false;
    }
    return true;
    
};