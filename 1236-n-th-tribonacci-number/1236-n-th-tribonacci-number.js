/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
   
let arr = [0,1]

for(let i=0;i<n;i++){
    if(arr.length>= 4){
        arr.push(arr[i-1]+arr[i]+arr[i+1])
        
    }else{
        arr.push(arr[i]+arr[i+1])
    }
    
}

return arr[n] 
};