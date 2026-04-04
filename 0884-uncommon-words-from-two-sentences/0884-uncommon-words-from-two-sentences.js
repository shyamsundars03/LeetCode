/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    
s1= s1.split(" ")
s2 =s2.split(" ")

let res =  s1.concat(s2)

return  res.filter((val,ind)=> res.indexOf(val)==ind && res.lastIndexOf(val)==ind )



};