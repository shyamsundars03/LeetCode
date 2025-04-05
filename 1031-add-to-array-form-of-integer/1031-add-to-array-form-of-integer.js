/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
        
    
    let nums =num.join("")
    console.log(nums)
    
    let res = BigInt(nums) + BigInt(k)
   let a = String(res)
   console.log(a)
     
     
     
let ans =[]

for(let i=0;i<a.length;i++){
    ans.push(Number(a[i]))
}

return ans
    
    
};