/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    let freq= {}

for( let val of arr){
    freq[val]= (freq[val] || 0 )+1
}


let occ =[] 
occ.push(...Object.values(freq))

let uni =[...new Set(occ)]
// console.log(uni)

if(occ.length == uni.length){
    //  console.log(true)
    return true
}else{
        // console.log(false)
        return false
}







};