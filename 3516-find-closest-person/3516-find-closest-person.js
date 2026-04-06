/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    

let a =  Math.abs(x-z)
let b =  Math.abs(y-z)

console.log(a,b)

if(a<b){
    return 1
}else if(b <a){
    return 2
}else{
    return 0
}




};