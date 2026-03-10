/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    
function rec(num, n = num , i=0){
    
    if(n==0) return i
    if(n%2==0){
        return rec(num,n/2, i+1)
    }else{
        return rec(num,n-1, i+1)
    }
    
}

return rec(num)





};