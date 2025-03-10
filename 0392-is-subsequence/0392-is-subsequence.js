/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
let a=0
    
    for(let i=0;i<t.length;i++){
        if(a<s.length && s[a]===t[i]){
        a++
        }
    }
   return  a===s.length



};