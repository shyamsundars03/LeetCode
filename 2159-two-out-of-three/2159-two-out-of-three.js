/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    
let arr = [nums1,nums2,nums3]

for(let i=0;i<arr.length;i++){
    arr[i] =  [...new Set(arr[i])]
}

let frq={}
let res = []

for(let val of arr){
    for(let v of val){
        frq[v]= (frq[v] || 0)+1
        // console.log(`${v}:${frq[v]}`)
        if(frq[v]==2){
            // console.log(`${v} :${frq[v]} is `)
            res.push(v)
        }
        
    }
}

return res


};