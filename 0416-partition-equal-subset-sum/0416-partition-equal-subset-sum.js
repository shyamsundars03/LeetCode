/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    

let totalsum = nums.reduce((a,c)=> a+c,0)
// console.log(totalsum)

if(totalsum%2!==0){
    return false
}

let target = totalsum/2
let a = new Array(target +1).fill(false)
a[0] = true

for(let num of nums){
    for(let b = target; b>=num;b--){
        a[b]= a[b] || a[b-num]
    }
}

return a[target]


};