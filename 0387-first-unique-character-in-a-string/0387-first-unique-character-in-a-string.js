/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

let arr = s.split("")
let a=""
  let frq={}
    for(let val of s){
        frq[val]= (frq[val] || 0)+1
    }

      for(let val in frq ){
        if(frq[val]===1){
            a= val
            break
        }
      } 
    
if(a!== ""){
    return arr.indexOf(a)
}else{
    return -1
}

};