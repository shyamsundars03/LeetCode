/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
let person = "B"

let c= 10

let v=n
let i=0
while(i<=n){
    
    v = v-(c-i)
    console.log(v)
    if(v<0)break
if(person == "B"){
    person = "A"
}else{
    person = "B"
}
    i++
}

return person == "A"? true: false
};