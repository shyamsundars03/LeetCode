/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
        
    let n = nums.filter((val)=> val%2==0)
    // console.log(n)
    if(n.length==0) return -1
    
    let frq={}
    
    for(let val of n){
        frq[val] = (frq[val] || 0 )+1
    }
    
    // console.log(frq)
    let lar =-Infinity
    let k = 0
    for(let v in frq){
        if(frq[v] > lar){
            lar= frq[v]
            k= v
        }
    }
    return Number(k)
    
};