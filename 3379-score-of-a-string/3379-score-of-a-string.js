/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
        let num =[]
    for(let i=0;i<s.length;i++){
       num.push(s.charCodeAt(i))
    }
    let dig=[]
    for(let j=0;j<num.length-1;j++){
        // console.log(num[j],num[j+1])
        dig.push(num[j]-num[j+1])
    }
    let pos = dig.map((val)=> (val<0)? Math.abs(val): val)
    let res =pos.reduce((acc,curr)=> acc+curr,0)
    return res
};