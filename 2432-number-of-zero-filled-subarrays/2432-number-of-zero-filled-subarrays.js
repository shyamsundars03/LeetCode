/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let c =0
let a=0

for(i=0;i<nums.length;i++){
    if(nums[i]==0){
        a++
        c+=a
    }else{
        a=0
    }
}

    return c
};