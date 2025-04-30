/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
   let count=[]
    let vowels = ["a","e","i","o","u"]
    
   
    for(let i=left;i<=right;i++){
     

            if(vowels.includes(words[i][words[i].length-1]) && vowels.includes(words[i][0])  ){
           
                    count.push(words[i])
            }

            
    }
    
    return count.length
};