/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    

    let symbols ={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
    let ans=0

for(let i=0;i<s.length;i++){
                // console.log(symbols[s[i]])
    if(i<s.length-1 && symbols[s[i]] < symbols[s[i+1]] ){

        ans -=symbols[s[i]]

    }else{
        ans +=symbols[s[i]]
    }
}
    // console.log(ans)
    return ans




};