/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {

let c = 0

for(let i=0;i<hours.length;i++){
    for(let j=0;j<hours.length;j++){
        if(i!=j){
        if((hours[i]+hours[j])%24==0){
            // console.log(i,j)
            c++
        }
        }
        
    }
}


return c/2





};