/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
        let res = 0
    
    let a = []
    for(let i=0;i<prices.length;i++){
       
        for(let j=i+1;j<prices.length;j++){
            if(prices[i] <prices[j]){
                
                // console.log(prices[i],prices[j])
                // console.log(a)
                
                res += prices[j] -prices[i]
                
            }
            i++
        }
    }
    
    // console.log(res)
    return res
};