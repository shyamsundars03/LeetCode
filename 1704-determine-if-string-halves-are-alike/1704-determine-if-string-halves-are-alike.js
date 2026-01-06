/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    

let a = s.slice(0,Math.floor(s.length/2))
let b = s.slice(Math.floor(s.length/2))

// console.log(a)
// console.log(b)
let vow = ["a","e","i","o","u","A","E","I","O","U"]

let ac = 0    
let bc = 0    

    for(let val of a){
        if(vow.includes(val)){
            ac++
        }
    }
    
    for(let val of b){
        if(vow.includes(val)){
            bc++
        }
    }
    
    
    return ac==bc








};