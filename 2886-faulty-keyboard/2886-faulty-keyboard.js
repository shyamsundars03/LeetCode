/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    
        let res =[]
    
    for(let i=0;i<s.length;i++){
        if(s[i]!=="i"){
            res.push(s[i])
        }else if(s[i]==="i"){
            res.reverse()
        }
    }
    
    return res.join("")
};