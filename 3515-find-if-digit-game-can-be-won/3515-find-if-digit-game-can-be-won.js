/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    

let al = nums.filter((val)=>val<10).reduce((a,c)=>a+c,0)
let bo = nums.filter((val)=>val>9).reduce((a,c)=>a+c,0)

if(al > bo){
    return true
}else if (al=== bo){
    return false
}else{
    return true
}





};