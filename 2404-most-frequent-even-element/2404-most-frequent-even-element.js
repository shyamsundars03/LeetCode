/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
        let frq = {}
    

    for(let val of nums){
        frq[val] = (frq[val] || 0)+1
    }
    console.log(frq)
    
    let even = Object.entries(frq).filter((val)=> Number(val[0])%2==0).sort((a,b)=> b[1]-a[1])
    if(even.length==0) return -1
    console.log(even)
    let c = even[0][1]
    console.log(c)
    
    let res = even.filter((val)=> val[1]==c).sort((a,b)=>a[0]-b[0])
    console.log(res)
    
    return Number(res[0][0])
};