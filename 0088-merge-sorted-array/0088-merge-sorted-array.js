/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let a = nums1.slice(0,m)
    let b = nums2.slice(0,n)

    let c =  [...a,...b]
    console.log(c)

 function mm(c){
    
    if(c.length <2) return c
    let mid = Math.floor(c.length/2)
    let l = c.slice(0,mid)
    let r = c.slice(mid)
    return mmm(mm(l),mm(r))
    
    
    
}
    
function mmm(l,r){
    let sort = []
    
    while(l.length && r.length){
        
        if(l[0]<r[0]){
            sort.push(l.shift())
        }else{
            sort.push(r.shift())
        }
        
    }
    
    return [...sort,...l,...r]
    
    
} 
    
const sorted = mm(c); 
    
for(let i=0;i<sorted.length;i++){
    nums1[i] = sorted[i]
}
    
};