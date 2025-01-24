/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    
let freq={}
let lucky= -1
for(let val of arr){
    freq[val]=(freq[val] || 0)+1
}
// console.log(freq)

for(let keys in freq){
    if(keys == freq[keys]){
        lucky= keys
    }
}

// console.log(lucky)
return Number(lucky)



};