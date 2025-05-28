/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
        num= n.toString().split("")
    // console.log(num)
    
    
    let pro = num.reduce((a,c)=> Number(a)*Number(c),1)
    // console.log(pro)
      let sum = num.reduce((a,c)=> Number(a)+Number(c),0)
    
    // console.log(sum)
    
    return pro-sum
};