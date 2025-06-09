/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
        let count =0
    for (let word of words){
            let cons = true
            
            for(let char of word){
                if(!allowed.includes(char)){
                    cons = false
                    break
                }
            }
            if(cons) count++
    
    }

    return count
};