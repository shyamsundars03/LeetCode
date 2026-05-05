/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    
let str= ""
let a = s.split("") 
for(let i=0;i<s.length;i++){
    // str = s[i] + str
    a.push(s[i])
    a.shift()
    console.log(a)
    if(a.join("")==goal){
       return true 
    }
}
return false
// console.log(str)




};