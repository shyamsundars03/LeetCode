/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let freq={}
    
    for(let val of s){
        freq[val]= (freq[val] || 0)+1
        if(freq[val]==2){
            return val
        }
    }
    // console.log(freq)
    return freq
};