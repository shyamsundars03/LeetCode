/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  
    let word =s.split(" ") 
    let wo = word.filter((val)=> (val==" ")? word.splice(val,1): val)
    let rev = []
    
    for(let i=0;i<wo.length;i++){
        if(wo[i]==''){
            wo.splice(i,1)
        } 
        rev+= " "+wo[wo.length-i-1]
        
    }
    
    let ans = rev.slice(1,rev.length).trim()
    return ans
};