/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
//         nums =  nums.sort((a,b)=>a-b)
    
//     let arr = []
    
//     for(let i=0;i<nums.length;i++){
//         for(let j=0;j<nums.length;j++){
//             if(nums[i]*k==nums[j]){
//                 // console.log(nums[i],nums[j])
//                 arr.push(nums[i],nums[j])
//             }
//         }    
//     }
    
//     if(arr.length==0) return 0
    
// let res = nums.map(val => 
//   arr.includes(val) ? "0" : val
// ).filter((val)=> val!="0")
//     // console.log("res",res)
//     return res.length


    nums.sort((a, b) => a - b);
    const n = nums.length;
    let i = 0;
    for (let j = 0; j < n; j++){
        if (i <= j && nums[j] > nums[i] * k){
            i++;
        }
    }
    return i;


















};