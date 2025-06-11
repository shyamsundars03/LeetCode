/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
        let frq ={}
    
    for(let val of s){
        frq[val]= (frq[val]  || 0)+1
    }
    
    // console.log(frq)
    
    let a=[]
    for(let v in frq){
        a.push(frq[v])
    }
    
    // console.log(a)
    
   let even =[],odd=[]
    for(let i=0;i<a.length;i++){
        if(a[i]%2!=0){
            odd.push(a[i])
        }else{
            even.push(a[i])
        }
        
    }
       return Math.max(...odd)- Math.min(...even)
};