/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
        
   let res=[]
 for(let i=0;i<arr2.length;i++){
     for(let j of arr1){
         if(arr2[i]===j){
             res.push(j)
         }
     }
 }
//  console.log(res)
    
    let rem = arr1.filter((val)=>  !res.includes(val)).sort((a,b)=>a-b)
    // console.log(rem)
    
    
    return res.concat(rem)
};