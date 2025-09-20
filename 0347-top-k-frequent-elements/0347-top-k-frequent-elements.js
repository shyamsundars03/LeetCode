/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
        let frq ={}
    let arr =[]
    let res =[]
    for(let val of nums){
        frq[val] = (frq[val] || 0)+1
    }
    for(let val in frq){
        arr.push([Number(val),frq[val]])
    }
    let sorted = arr.sort((a,b)=>b[1]-a[1])
    for(let i=0;i<k;i++){
        res.push(sorted[i][0])
    }
    return res
};