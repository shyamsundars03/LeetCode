/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    
let res = 0
let a = /[a-zA-z]/

for(let val of strs){

if(a.test(val)){
     res = Math.max(res,val.length)
}else{
res = Math.max(res, Number(val))

}
}


return res


};