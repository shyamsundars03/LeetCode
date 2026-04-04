/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    
let a =  words1.filter((val,ind)=> words1.indexOf(val)==ind && words1.lastIndexOf(val)==ind)
let b =  words2.filter((val,ind)=> words2.indexOf(val)==ind && words2.lastIndexOf(val)==ind)

let c =  a.concat(b)

console.log(c)
let res = c.filter((val, ind)=> c.indexOf(val)!=ind)

console.log(res)
return res.length


















};