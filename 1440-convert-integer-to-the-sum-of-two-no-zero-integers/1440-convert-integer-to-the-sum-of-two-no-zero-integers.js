/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let res =[]
    
    for(let i=1;i<n;i++){
        let a= i
        let b=n-i
        if(a+b==n){
            
            let s = String(a)
            let ss = String(b)
            if(!s.includes(0) && !ss.includes(0)){
                res.push([a,b])
            }
            
            
            
        }

    }
    
    return res[0]
};