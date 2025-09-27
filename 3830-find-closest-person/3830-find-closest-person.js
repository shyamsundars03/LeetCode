/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    

let p1 = Math.abs(x-z)
let p2 = Math.abs(y-z)

if(p1==p2){
    return 0 
}else if(p1<p2){
    return 1
}else{
    return 2
}



};