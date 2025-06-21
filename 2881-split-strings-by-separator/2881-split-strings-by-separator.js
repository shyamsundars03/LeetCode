/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
        let arr = []
    
for(let i=0;i<words.length;i++){
    let a = words[i].split(separator)

    arr.push(a)
    
}
let res = arr.flat().filter((val)=> val!== "")
    
return res
};