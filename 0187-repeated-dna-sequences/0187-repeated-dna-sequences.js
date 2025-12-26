/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    
let ss= ""
let f = {}
let res = []
for(let i=0;i<s.length;i++){
    let j=0
    let ss = ""
    while(j<=9){
        if(s[i+j] == undefined) break
        ss+=s[i+j]
        j++
        
    }
    if(ss.length==10){
        // console.log(ss)
        f[ss] =  (f[ss] || 0 )+1
        if(f[ss] >1){
            res.push(ss)
        }
    }
}


return res.filter((val, ind) => res.indexOf(val) == ind)

};