/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
        let res = 0
    let max = []
    while(grid.flat().length>=0){
        for(let val of grid){
            if(val.length==0){
                return res
            }
            let m = val.sort((a,b)=>a-b)
            max.push(m.pop())
        }
        max.sort((a,b)=>a-b)
        res+=max.pop()
        max=[]
    }

    return res
};