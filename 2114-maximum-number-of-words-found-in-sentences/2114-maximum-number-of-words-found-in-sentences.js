/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
let max = 0

for(let val of sentences){

let a =  val.split(" ")
// console.log(a)

if(a.length > max){
    max =  a.length
}


}


return max


};