/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let f ={}
    for(let val of num){
        f[val] = (f[val] || 0)+1
    }
    for(let i=0;i<num.length;i++){
        
       if((f[i]|| 0)!= Number(num[i])){
           return false
       }
    }
    return true
};