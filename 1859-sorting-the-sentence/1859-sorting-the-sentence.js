/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
         return s.split(" ").sort((a,b)=>a[a.length-1]-  b[b.length-1]).map((val)=> val.slice(0,val.length-1)).join(" ")
    
};