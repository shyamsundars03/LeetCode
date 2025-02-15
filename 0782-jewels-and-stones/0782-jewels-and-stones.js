/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let a=[...jewels]
    let b=[...stones]
    let count =0
let res = b.filter((val, ind)=> {
    if(a.includes(val)){
        count++
    }
})

return count 

};