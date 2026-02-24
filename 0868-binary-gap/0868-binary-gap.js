/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
        let  num =  n.toString(2)
    console.log(num)
    
    let s = 0
    
    for(let i=0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            
            if(num[i]=="1" && num[j]=="1"){
                console.log(num[i],i,num[j],j)
                
                
                if(Math.abs(j-i) > s){
                    s= Math.abs(j-i)
                }
                i=j
                
                
                
                
            }
            
            
        }
        
        
    }
    
    
    
    return s
};