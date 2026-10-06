/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let count = 0;
    let result = 0;

    for (const ch of s) {
        if (ch === '(') {
            count++;
        } else {
            if (count > 0) {
                count--;
            } else {
                result++;
            }
        }
    }

    return result + count;
};