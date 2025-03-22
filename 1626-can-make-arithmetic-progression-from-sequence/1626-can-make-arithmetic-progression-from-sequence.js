/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    

    let num= arr.sort((a,b)=>a-b)
    let diff=[]
for( let i=0;i<num.length-1;i++){
    diff.push(num[i]- num[i+1])
}    

    
    
let res = [...new Set(diff)]

if(res.length===1){
        // console.log("true")
        return true
}else{
        // console.log("false")
        return false
}
    




};