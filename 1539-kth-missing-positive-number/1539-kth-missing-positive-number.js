/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
     
let res = []
let max =  Infinity
let i=1
while(i<=max){

if(!arr.includes(i)){
    
    if(res.length==k){
        return res[res.length-1]
    }
    
    res.push(i)
    
}
i++
}


};