/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    


let min = Infinity
for(let val of tasks){

min = Math.min(min,val[0]+val[1])
// min = val[0]+val[1]
// console.log(min,val[0]+val[1])

}

return min


};