/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    
   
    let arr= s.split("").map((val)=> val.charCodeAt()-96).join("")

while(k-->0){
    arr =arr.split("").reduce((a,c)=>a+Number(c),0).toString()
}
return Number(arr)




};