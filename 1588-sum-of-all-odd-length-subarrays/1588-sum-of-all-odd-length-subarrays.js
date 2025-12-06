/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
        
    let sum = arr.reduce((a,c)=>a+c,0)
    
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let a = arr.slice(i,j+1)
           
            if(a.length%2!==0 && a.length!==1){
                //  console.log(a)
                 s =  a.reduce((a,c)=>a+c,0)
                 sum+= s
            }
        }
    }
    
    return sum
};