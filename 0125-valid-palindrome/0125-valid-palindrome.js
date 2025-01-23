/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
let trimed=[]
for(let i=0;i<s.length;i++){
    if(!/[\s\W_]/.test(s[i]) ){
        trimed.push(s[i])
    }
}
let one =trimed.join("").toLowerCase()
let two = trimed.reverse().join("").toLowerCase()

let count=0
for(let i=0;i<one.length;i++){
if(one[i]==two[i]){
   count++
}
}

if(count===one.length){
return true
}else{
   return false
}





};