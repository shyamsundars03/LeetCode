/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
        let odd= 0, even=0
    
    for(let i=0;i<num.length;i++){
        if(i%2!==0){
            odd+=Number(num[i])
        }else{
            even+=Number(num[i])
        }
    }
    
    // console.log(odd)
    // console.log(even)
    
    if(odd==even){
        return true
    }else{
        return false
    }
    
};