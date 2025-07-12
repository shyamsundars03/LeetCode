/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
        
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    let apt = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    

let l ={}    
apt.map((val, ind)=> {l[val] = morse[ind]})
// console.log(l)
    
    
 
  let str = ""
  let res =[]
         for(let v of words){
             for(let s of v){
                for(let val in l){
                if(s == val){
                    str+=l[val]
                }
              }

              
            }
            res.push(str)
            str= ""
            
         }
  
   
   return [...new Set(res)].length
};