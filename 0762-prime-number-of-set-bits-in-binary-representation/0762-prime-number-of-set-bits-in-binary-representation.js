/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    
let c = 0
let p = [ 2, 3, 5, 7, 11, 13, 17,19]

while(left<=right){

let a = left.toString(2)

let check =  a.split("").filter((val)=> val=="1").length

if(p.includes(check)){
    c++
}



    left++
}



return c




};