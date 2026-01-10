/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    

let res = []

let l = []
let r = []

for(let i=0;i<nums.length;i++){

let lsum = nums.slice(0,i).reduce((a,c)=>a+c,0)
let rsum = nums.slice(i+1).reduce((a,c)=>a+c,0)
l.push(lsum)
r.push(rsum)


}

console.log(l)
console.log(r)

for(let i=0;i<l.length;i++){
    res.push(Math.abs(l[i]-r[i]))
}

console.log(res)
return res


};