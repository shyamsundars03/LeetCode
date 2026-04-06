/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    

let even = []
let odd = []

for(let val of nums){
    if(val%2==0){
        even.push(val)
    }else{
        odd.push(val)
    }
}

return [...even,...odd]




};