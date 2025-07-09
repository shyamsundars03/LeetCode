/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let c = {}
    for(let val of chars){
        c[val] = (c[val] || 0)+1
    }
    // console.log(c)
let res = 0
for(let val of words){
    let w ={}
    for(let v of val){
        w[v] = (w[v]  || 0)+1
    }
    
    let g= true
    
    for(let ww in w){
        if(!c[ww] || w[ww] >c[ww]){
            g= false
            break
        }
    }
    
    
    if(g){
        res += val.length
    }
    
    
    

}

   
   return res
};