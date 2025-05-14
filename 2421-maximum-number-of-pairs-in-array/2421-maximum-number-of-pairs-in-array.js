/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let pairs =0
    let left =0
    let freq ={}
    for (let val of nums){
        freq[val]= (freq[val] || 0)+1
        if(freq[val]%2==0){
            pairs++
            left--
        }else{
            left++
        }
        
        
        }
    
    return [pairs,left]
};