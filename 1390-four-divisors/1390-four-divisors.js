/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    
let h =  Math.max(...nums)
// console.log("largest:",h)
 let res = 0
for(let i=0;i<nums.length;i++){
    // console.log(nums[i])
    let j=1
    let c=0
    let sum = 0
    while(j<=nums[i]){
        
        if(nums[i]%j==0){
            // console.log("values",j)
            sum+=j
            c++
        }
        // console.log("===")
        if(c>4) break
        j++

    }
    
            if(c==4){
            // console.log("sum:",sum)
            res+=sum
            c=0
        }
    
    
    
}


return res

};