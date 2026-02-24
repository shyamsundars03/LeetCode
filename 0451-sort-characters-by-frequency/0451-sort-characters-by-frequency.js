/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
       let res = ""
    
    let frq={}
    
    for(let val of s){
        frq[val] = (frq[val] || 0)+1
    }
    
    console.log(frq)
    
    let obj = Object.entries(frq)
    console.log(obj)
    obj =  obj.sort((a,b)=> b[1]-a[1])
    console.log(obj)
    
    for(let val of obj){
        let i=1
        while(i<=val[1]){
            res+=val[0]
            i++
        }
        
    }
    
    return res
};