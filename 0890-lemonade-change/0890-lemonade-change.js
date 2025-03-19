/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    

    
    let five=0, ten=0;
    
    for(i of bills){
        if(i===5){
            five++
        }else if(i===10){
            if(five<1)return false
            ten++
            five--
        }else if(i===20){
           if(five > 0 && ten>0){
            ten--
            five--
           }else if(five>=3){
            five-=3
           }else{
            return false
           }
        }
    }return true


};