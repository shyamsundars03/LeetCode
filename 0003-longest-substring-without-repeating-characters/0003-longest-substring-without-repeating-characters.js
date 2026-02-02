/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        let arr = []
    
    let ss = "" 
    for(let i=0;i<s.length;i++){
        
        if(s[i]==s[i+1]){
            ss+=s[i]
            let sss = [...new Set(ss)]
            // console.log("set",ss,ss.length,sss.length)
            if(ss.length == sss.length){
                arr.push(ss)
            }
            ss =""
        }else{
            ss+=s[i]
            // console.log(ss,i)
            let sss = [...new Set(ss)]
            // console.log("set",ss,ss.length,sss.length)
            if(ss.length == sss.length){
                arr.push(ss)
            }else{
                ss = ss.slice(1)
            }
        }
        
    }
    
    // console.log(arr)
    
    let hk = ""
    let hv = 0
    
    for(let val of arr){
        if(val.length > hv){
            hk = val
            hv = val.length
        }
    }
    
    // console.log(hk,hv)
    
    return hv
};