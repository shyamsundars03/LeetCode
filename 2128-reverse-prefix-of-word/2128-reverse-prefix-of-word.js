/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
       let one=[]
let len 
    for(let i=0;i<word.length;i++){
        if(word[i]===ch){
            len =word.indexOf(ch)
            one = len !== -1 ? word.slice(0, len + 1) : "";
        }
       
    }
    // console.log(one)
    
    let first  = [...one].reverse().join("")
    // console.log(first)
    let sec 
 
    
    for(let i=0;i<word.length;i++){
        sec = word.slice(first.length)
    }
   
// console.log(sec)

    
    return first.concat(sec)
    
};