/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {

    if (num.length === 0) return ""

    let lastChar = num[num.length - 1]
    let digit = lastChar.charCodeAt(0) - "0".charCodeAt(0)

    if (digit % 2 === 1) {
        return num;
    }

    return largestOddNumber(num.slice(0, num.length - 1))
};