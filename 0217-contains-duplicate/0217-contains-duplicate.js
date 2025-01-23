/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
let count =0;
nums.sort((a,b)=>a-b)

for(let i=0;i<nums.length;i++){
    if(nums[i]===nums[i+1]){
        count++
    }
}



if(count >= 1){
    return true
}else{
    return false
}

};