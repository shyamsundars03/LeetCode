/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
let maxi = []
for(let i=0;i<accounts.length;i++){
    // console.log(arr[i])
    let n = accounts[i].reduce((a,c)=>a+c,0)
    // console.log(n)
    maxi.push(n)
    
}

return Math.max(...maxi)


};