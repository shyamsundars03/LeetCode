/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    let sor = [...cost].sort((a,b)=>a-b)
    // console.log(sor)
    // console.log(cost)
    let res= 0
    let thi =0
    let tot = sor.reduce((a,c)=>a+c,0)
    // console.log(tot)
    for(let i=sor.length+1;i>=0;i--){

        if((sor[i]+sor[i-1])>=(sor[i-2] || 0)){
// console.log(sor[i],sor[i-1])
            res+= sor[i]
            res+=sor[i-1]
            thi+=(sor[i-2] || 0)
            sor.pop(i)
            sor.pop(i-1)
            sor.pop(i-2)
        }else if(sor.length==1 && sor[i]===1){
            res+=1
        }
    }
    // console.log(res)
    // console.log(thi)
    
    // return res.reduce((a,b)=> a+b,0)
    
    // return res
    return tot-thi
    
};