/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
        let sum =1
    if(num==1)return false


    for(let i=2;i<num;i++){
        if(num%i==0){
            sum+=i
        }
    }
    
    if(sum== num){
        return true
    }else{
        return false
    }
};