/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    
s = Array.from(s)
// console.log(s)

let a =  s.map((val)=> val.toLowerCase())

return a.join("")

};