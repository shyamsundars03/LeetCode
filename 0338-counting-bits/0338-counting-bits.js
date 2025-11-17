/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
        let arr = new Array(n+1)
    // console.log(arr)
    let i= 0
    while(i<=n){
        
        let b= i.toString(2)
        // console.log(b)
        let s = [...b]
        // console.log(s)
        let o = s.filter((v)=> v!=="0")
        console.log(o)

        arr[i]= o.length
        // arr.push(b)
        i++
        
    }
    
    return arr
};