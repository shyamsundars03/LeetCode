/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
         if(s.length!=t.length) return false
    let sf ={}
    let tf ={}
    
    for(let val of s){
        sf[val] = (sf[val] || 0)+1
    }
    // console.log(sf)
    
    for(let val of t){
        tf[val] = (tf[val] || 0)+1
    }
    // console.log(tf)
    
    for(let val in sf){
        for(let v in tf){
            if(val==v ){
                sf[val] = sf[val]-tf[val]
            }
        }
    }
    // console.log(sf)
    for(let val in sf){
        if(sf[val]!= 0){
            return false
        }
    }
    return true
};