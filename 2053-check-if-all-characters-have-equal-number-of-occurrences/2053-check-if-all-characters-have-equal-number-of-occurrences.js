/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
        let frq ={}
    
    for(let val of s){
        frq[val]= (frq[val] || 0 )+1
    }
    // console.log(frq)
    let res =[]
    for(let va in frq){
        res.push(frq[va])
    }
    return [...new Set(res)].length===1 ? true : false
    
};