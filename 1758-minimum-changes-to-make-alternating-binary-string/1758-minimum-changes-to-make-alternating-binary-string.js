/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    

    let one = 0   
    let zero = 0  

    for (let i = 0; i < s.length; i++) {


        let expectedZeroPattern = i % 2 === 0 ? "0" : "1"
        let expectedOnePattern  = i % 2 === 0 ? "1" : "0"

        if (s[i] !== expectedZeroPattern) {
            zero++
        }

        if (s[i] !== expectedOnePattern) {
            one++
        }
    }

    return Math.min(one, zero)
};