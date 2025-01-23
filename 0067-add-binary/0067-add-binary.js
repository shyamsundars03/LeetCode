/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    if (a.length < 20 && b.length < 20) {
        let res = parseInt(a, 2) + parseInt(b, 2);
        return res.toString(2); 
    } else {

        let res = BigInt("0b" + a) + BigInt("0b" + b);
        return res.toString(2); 
    }
};