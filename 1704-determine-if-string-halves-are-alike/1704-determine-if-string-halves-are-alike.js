/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
     let a =  s.slice(0,Math.floor(s.length/2))
    let b = s.slice(Math.floor(s.length/2))
    
    // console.log(a)
    // console.log(b)
    let ac = 0
    let bc = 0
    let v = ["a","e","i","o","u","A","E","I","O","U"]
    
    for(let val of a){
        if(v.includes(val)){
            ac++
        }
    }
    // console.log(ac)
        for(let val of b){
        if(v.includes(val)){
            bc++
        }
    }
    
    // console.log(bc)
    
    return ac==bc
};