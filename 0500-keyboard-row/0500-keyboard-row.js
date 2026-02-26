/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let r1 = "qwertyuiop"
    let r2 = "asdfghjkl"
    let r3 = "zxcvbnm"
    
    let res = []
    
    for(let val of words){
        
        let a = val.toLowerCase()
        let c = 0

        for(let i=0;i<a.length;i++){
            if(r1.includes(a[i])){
                c++
            }
        }
        if(c==a.length){
            res.push(val)
            continue  
        }
        
        c=0
        
        for(let i=0;i<a.length;i++){
            if(r2.includes(a[i])){
                c++
            }
        }
        if(c==a.length){
            res.push(val)
            continue
        }
        
        c=0

        for(let i=0;i<a.length;i++){
            if(r3.includes(a[i])){
                c++
            }
        }
        if(c==a.length){
            res.push(val)
        }
    }
    
    return res
    
};