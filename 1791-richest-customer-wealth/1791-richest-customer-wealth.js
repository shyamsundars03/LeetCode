/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    

    let arr=[]
for(let i=0;i<accounts.length;i++){
    arr.push(accounts[i].reduce((a,c)=>a+c,0))
}    
    // console.log(arr)
    
    let lar=-Infinity
    
for(let j=0;j<arr.length;j++){
    if(arr[j]>lar){
        lar= arr[j]
    }
}
    
    // console.log(lar)
    return lar





};