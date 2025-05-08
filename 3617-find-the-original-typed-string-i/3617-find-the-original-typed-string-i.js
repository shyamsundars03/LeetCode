/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let s= word.split("")
    let count =1
    // let dup = s.filter((val,ind)=> word.indexOf(val)!==ind )
    // return count+dup.length
    
    for(let i=0;i<s.length;i++){
        if(s[i]==s[i+1]){
            // console.log(s[i],s[i+1])
            
           
            count++
            i-1
        }
    }
    
    // console.log(s)
    return count
};