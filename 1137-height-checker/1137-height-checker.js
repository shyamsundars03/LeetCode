/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
let height= JSON.parse(JSON.stringify(heights))

let sorted= heights.sort((a,b)=>a-b)

let count=0
for(let i=0;i<heights.length;i++){
    if(height[i]!=sorted[i]){
        count++
    }
}

return count





};