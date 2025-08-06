/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
        let res =[]
    let c =0
    
    for(let val of s){
        if(val=="E"){
            c++
            res.push(c)
        }else if(val=="L"){
            c--
            res.push(c)
        }
    }
    
    return Math.max(...res)
};