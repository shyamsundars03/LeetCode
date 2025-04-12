/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    s1 = s1.split(" ")
    // console.log(s1)
s2 = s2.split(" ")
    // console.log(s2)
let words = s1.concat(s2)
    // console.log(words)
    
 let res = words.filter((val,ind)=> words.indexOf(val)===ind && words.lastIndexOf(val)===ind)
//  console.log(res)
   return res 
    
};