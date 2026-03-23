/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    
let xx= String(x).split("")
console.log(xx)
let sum = xx.reduce((a,c)=> Number(a)+Number(c),0)
console.log(typeof sum )
if(x%sum==0){
    return sum
}
    return -1


};