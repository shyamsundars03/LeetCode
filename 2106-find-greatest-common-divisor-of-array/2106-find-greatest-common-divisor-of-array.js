/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    
let a = Math.min(...nums)
let b = Math.max(...nums)

    while(a>0 && b>0){
        if(a>b){
            a = a%b;
        }
        else b = b%a;
    }
    if(a == 0) return b;
    return a;


};