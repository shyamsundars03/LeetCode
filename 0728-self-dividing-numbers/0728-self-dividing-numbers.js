/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
        let res = []
    
    
    for(let i = left ;i<=right;i++){
        let a = String(i)
        if(a.length==1){
            res.push(Number(a))
        }else{
            
            let s = []
            for(let val of a){
                s.push(val)
            }
            // console.log(s)
            let c = 0
            for(let val of s){
                if(Number(a)%Number(val)==0){
                    c++
                }
                if(c==s.length){
                    res.push(Number(a))
                }
            }
            
            
            
        }
        
    }
    return res
};