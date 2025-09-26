/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
        let s = String(n).split("")
    let res = 0
    for(let i=0;i<s.length;i++){
        if(i%2==0){
            res+=Number(s[i])
        }else{
            res-= Number(s[i])
        }
    }
    return res
};