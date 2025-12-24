/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
        let n=1
    let c = 0
    while(n<=num){
        let s =  String(n)
        // console.log(s)
        
        if(s.length ==1){
            if(Number(s)%2==0){
                c++
            }
        }else{
            let ss = s.split("")
        let sum = ss.reduce((a,c)=> Number(a)+Number(c),0)
        // console.log(sum)
        if(Number(sum)%2==0){
            c++
        }
            
        }
        
        n++
        
    }
    
    
    return c
};