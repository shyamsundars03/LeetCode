/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(aa) {
    

    let arr=[]
    aa.sort((a,b)=>a-b)
    for(let i=0;i<aa.length;i+=2){
        arr.push(aa[i+1])
        arr.push(aa[i])
    }
    
    // console.log(arr)
    return arr


};