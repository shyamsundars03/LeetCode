/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
      let l =0
   let r =0
   let u =0
   
   
   for(let val of moves){
       if(val == "L"){
           l++
       }else if(val == "R"){
           r++
       }else{
           u++
       }
   }

return Math.max(
  Math.abs((r + u) - l), 
  Math.abs(r - (l + u))      
)

};