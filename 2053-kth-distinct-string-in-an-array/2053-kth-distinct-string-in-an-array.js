/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    
let res =  arr.filter((val,ind)=>arr.indexOf(val)==ind && arr.lastIndexOf(val) ==ind)
console.log(res)
// console.log(res.length <k)

if(res.length){




return res.length+1<k ? "" : res[k-1]
}else{
    return ""
}

};