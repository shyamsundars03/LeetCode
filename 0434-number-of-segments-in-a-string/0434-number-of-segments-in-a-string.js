/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
        

  let ss = Array.from(s.split(" "))
    // console.log(ss)
    
    let res = ss.filter((val)=> val!="")

return res.length
};