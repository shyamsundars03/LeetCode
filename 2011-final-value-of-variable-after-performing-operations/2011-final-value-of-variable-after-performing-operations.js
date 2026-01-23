/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
        let X = 0
    
    for(let val of operations){
        if(val.includes("+")){
            X++
        }else{
            X--
        }
    }
    
    return X
};