/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
        
        let count =0
    
    for(let i=0;i<words.length;i++){
        let a = words[i]
        let found = true
        for(let j=0;j<pref.length;j++){
            
            if(pref[j]!==a[j]){
                
                found = false
                break
                
            }
            
        }
        if(found){
            count++
        }
    }
    
    
    return count
};