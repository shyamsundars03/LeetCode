/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let totalSum=0;
    for(let i=0;i<arr.length;i++){
        totalSum+=arr[i]
    }
    const average = totalSum/3;
    let sum=0,count=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum===average){
            count++;
            sum=0;
        }
    }
    return count>=3;
};