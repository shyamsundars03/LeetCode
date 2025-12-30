/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
        let res = []
    
    for(let val of order){
        if(friends.includes(val)){
            res.push(val)
        }
    }
    
    return res
};