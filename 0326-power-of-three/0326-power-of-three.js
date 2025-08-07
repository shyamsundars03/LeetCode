/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n==0) return false
 
while(n%3==0){
    // if(n==0 || n==1)return true
    // isPowerOfThree(n/3)
    n/=3
    // console.log(n)
}


    return n==1
};