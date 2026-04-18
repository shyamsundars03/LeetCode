/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
       if(nums.length<3){
        return -1
    }
    let res = Infinity
    
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                
                if(nums[i] == nums[j] && nums[j]== nums[k]){
                    // console.log(i,j,k)
                    if(res > Math.abs(i-j) + Math.abs(j-k) + Math.abs(k-i)){
                        // console.log("sdvs",Math.abs(i-j) ,Math.abs(j-k) ,Math.abs(k-i))
                        res = Math.abs(i-j) + Math.abs(j-k) + Math.abs(k-i)
                    }
                    
                }
            }
        }
    }
    
    
    return res===Infinity ? -1: res
    
    
    
};