/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let a = n.toString(2).split("")

return a.reduce((a,c)=> Number(a)+Number(c),0)
};