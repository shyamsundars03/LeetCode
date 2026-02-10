/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    
 let n = nums.length;
    let maxLen = 0;
    
    for (let i = 0; i < n; i++) {
        let evenSet = new Set();
        let oddSet = new Set();
        
        for (let j = i; j < n; j++) {
            let val = nums[j];
            
            if (val % 2 === 0)
                evenSet.add(val);
            else
                oddSet.add(val);
            
            if (evenSet.size === oddSet.size)
                maxLen = Math.max(maxLen, j - i + 1);
        }
    }
    
    return maxLen;

};