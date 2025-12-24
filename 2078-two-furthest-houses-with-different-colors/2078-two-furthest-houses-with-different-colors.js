/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
        let max = 0
    
    for(let i=0;i<colors.length;i++){
        for(let j=i;j<colors.length;j++){
            if(colors[i]!== colors[j]){
                if(max < Math.abs(i-j)){
                    max =  Math.abs(i-j)
                }
                // console.log(colors[i],colors[j])
                // console.log(max)
            }
        }
        // console.log("===")
    }
    
    return max
};