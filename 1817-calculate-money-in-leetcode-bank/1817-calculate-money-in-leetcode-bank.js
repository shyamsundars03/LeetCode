/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
        let res = 0
    if(n<=7){
        for(let i=1;i<=n;i++){
            res+=i
        }
        return res
    }else{
        
        let c = 0
       
        for(let i=0;i<n;i++){
            let j=1
            while(j<=7){
                res+=j+i
                // console.log("res",res)

                c++
                // console.log("count",c)
                if(c==n){
                    // console.log(c,n,j)
                    return res
                }
                j++
            }
            
            
            // console.log("j: ",j)
            // console.log("c: ",c)
            
            
        }
        
        
    }
    
    
};