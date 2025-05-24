/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let t1 =0,t2=0

for(let i of nums){
    let val = Math.max(t1,t2+i)
    t2= t1
    t1= val
}
return t1
};