/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
        let frq1 ={}
    let frq2 ={}
    
    for (let va of words1){
        frq1[va]= (frq1[va] || 0)+1
    }
    // console.log(frq1)
        for (let va of words2){
        frq2[va]= (frq2[va] || 0)+1
    }
    // console.log(frq2)
    
  let w1 , w2  
if(Object.keys(frq1).length > Object.keys(frq2).length){
    w1 = frq1
    w2 = frq2
}else{
    w1 = frq2
    w2 = frq1
}
let count =0
for( let val in w1){
        for(val2 in w2){
            if(val==val2 && w1[val]==1 && w2[val]==1 ){
                count++
            }
        }
}
    
    return count
};