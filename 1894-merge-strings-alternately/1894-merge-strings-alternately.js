/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
let length = word1.length+word2.length


    let merged=[];

    for(let i=0;i<length;i++){
        merged.push(word1[i],word2[i])

    }
   
  
    
    return merged.join("")

};