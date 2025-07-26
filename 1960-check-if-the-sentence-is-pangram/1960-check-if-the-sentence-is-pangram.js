/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
        let frq ={}
    for(let val of sentence){
        frq[val] = (frq[val] || 0)+1
    }
    // console.log(frq)
    
    let count = 0
    for(let v in frq){
        if(v){
            count++
        }
    }
    if(count==26){
        return true
    }else{
        return false
    }
};