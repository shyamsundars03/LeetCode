/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {


        function rec(num1,num2,c=0){
            
            if(num1==0 || num2==0){
                return c
            }else{
                if(num1 >= num2){
                    num1= num1-num2
                }else{
                    num2 = num2-num1
                }
                return rec(num1,num2,c+1)
            }
        }


let res =  rec(num1,num2)
return res



};