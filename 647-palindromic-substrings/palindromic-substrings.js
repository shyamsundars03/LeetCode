/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let c = 0

    for (let i = 0; i < s.length; i++) {

        for (let j = i; j < s.length; j++) {

            // Directly check using indices
            if (isPali(s, i, j)) {
                c++
            }
        }
    }

    return c
}


function isPali(s, l, r) {

    while (l < r) {

        if (s[l] !== s[r]) {
            return false
        }

        l++
        r--
    }

    return true
};