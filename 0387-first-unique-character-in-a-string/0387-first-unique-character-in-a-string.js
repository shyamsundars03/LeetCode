/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

let si = s.split("")
// console.log(si)
let uni = si.filter((val,ind)=> s.indexOf(val)===ind && s.lastIndexOf(val)===ind)
    console.log(uni)
    let lett = uni[0]
    console.log(lett)
    
  for(let i=0;i<si.length;i++){
      if(si[i]===lett){
          return i
      }
      if(uni.length===0){
        return -1
      }
  }
   
   

};