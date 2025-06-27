/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let a = digits.join("")
   let b = String(BigInt(a)+1n)

let an =[]
    for(let i=0;i<b.length;i++){
        an.push(Number(b[i]))
    }
    
return an
};