/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
        let c= 0
    for(let i = low;i<=high;i++){
        let s = ""
        s = String(i)
        // console.log(typeof s)
        if(s.length%2==0){
            s=  s.split("")
            // console.log(s)
            let mid = Math.floor((s.length)/2)
            let l = s.slice(0,mid)
            let r = s.slice(mid)
            
            let a = l.reduce((a,c)=> Number(a)+Number(c),0)
            let b = r.reduce((a,c)=> Number(a)+Number(c),0)
            if(a==b){
                c++
            }
            
        }
    }
    return c
};