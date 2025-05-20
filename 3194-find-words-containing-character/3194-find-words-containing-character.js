/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
       let res=[]
    
    for(let i=0;i<words.length;i++){
        let wo= words[i]
        for(let j=0;j<wo.length;j++){
            if(wo[j]=== x){
                res.push(i)
            }
            // console.log(wo[j])
        }
    }
    
    return [...new Set(res)] 
};