/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
        const MOD = Math.pow(10,9) + 7;
    let res = 0;
    for(let i = 1; i <= n; i++){
        const temp = i.toString(2);
        for(let j = 0; j < temp.length; j++){
            const val = (temp.charAt(j) === '1') ? 1 : 0;
            res = ((res * 2) + val) % MOD;
        }
    }
    return res;
};