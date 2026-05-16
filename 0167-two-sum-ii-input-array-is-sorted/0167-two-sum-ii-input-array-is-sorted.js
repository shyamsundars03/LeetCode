/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
let res = []

for(let i=0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
        if(numbers[i]+numbers[j]==target){
            console.log(numbers[i],numbers[j])
            return [i+1,j+1]
        }


    }
}






};