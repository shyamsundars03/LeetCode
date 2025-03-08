/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    
    
let count =0
    
    for(let i=0;i<items.length;i++){
        
        if(ruleKey === "type" && ruleValue === items[i][0] ){
            count++
            // console.log(items[i][0])
        }else if(ruleKey === "color" && ruleValue === items[i][1] ){
                    count++
                    // console.log(items[i][1])
        }else if(ruleKey === "name" && ruleValue === items[i][2] ){
                        count++
                    // console.log(items[i][2])
        }

    }
    
    // console.log(count)
    return count
    


};