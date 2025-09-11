/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
        let i=1
    let n1= [],n2 =[]
    while(i<=n){
        
        if(i%m==0){
            n2.push(i)
        }else{
            n1.push(i)
        }
        i++
    }
    
let res = n1.reduce((a,c)=>a+c,0) -n2.reduce((a,c)=>a+c,0)

return res
};