/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
        let res= ""
    let arr = []
    
    for(let i=0;i<num.length;i++){
            let a =  num.slice(i,3+i)
            // console.log(a)
            let s = [...new Set(a)]
            // console.log(s)
            if(s.length==1){
                arr.push(a)
            }
    }
    
    let r = arr.filter((v)=>v.length==3).sort((a,b)=>b-a)
    res = r[0]
    return res == undefined ? "" : res
};