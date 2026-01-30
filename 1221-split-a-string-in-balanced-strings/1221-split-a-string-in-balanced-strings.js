/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
        
    let c= 0
    let str = ""
    
    for(let val of s){
        
        str+=val
        
if(str.length>1){
    
    let frq ={}
    
    for(let val of str){
        frq[val] = (frq[val] || 0)+1
    }
    
    // console.log(frq)
    if(frq.R ==frq.L){
        c++
        str= ""
    }
    
    
    
}
        
        
        
    }
    
    
    return c
};