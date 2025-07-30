/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    
    let arr =[]
    
    for(let i=0;i<s.length;i++){
        arr.push([indices[i],s[i]])
    }
    
    let res = arr.sort((a,b)=> a[0]-b[0])
    let ans =""
    
    for(let i=0;i<res.length;i++){
        ans+=res[i][1]
    }
    
    return ans
};