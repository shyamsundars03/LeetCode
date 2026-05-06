/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
function rec(arr, i=0,ind =0,lar= -Infinity){
    
    if(i==arr.length){
        return ind
    }
    if(arr[i]> lar){
        return rec(arr,i+1,ind =i,lar = arr[i])
    }
    return rec(arr,i+1,ind,lar)
    
}

return rec(arr)





};