/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {


    let a = x.toString(2)
    let b = y.toString(2)

    let maxLen = Math.max(a.length, b.length)

    a = a.padStart(maxLen, "0")
    b = b.padStart(maxLen, "0")

    let c = 0

    for(let i = 0; i < maxLen; i++) {

        if(a[i] !== b[i]) {
            c++
        }
    }

    return c


};