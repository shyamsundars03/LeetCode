/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    s= Array.from(s)
    // console.log(s)
    
    
    let l = {a:"1",b:"2",c:"3",d:"4",e:"5",f:"6",g:"7",h:"8",i:"9",j:"10#",k:"11#",l:"12#",m:"13#",n:"14#",o:"15#",p:"16#",q:"17#",r:"18#",s:"19#",t:"20#",u:"21#",v:"22#",w:"23#",x:"24#",y:"25#",z:"26#"}

    let r =''
for(let i=0;i<s.length;i++){
    let a =""
    if(s[i]==="#"){
        a+=s[i-2]+s[i-1]+s[i]
        s.splice(i-2,2)
        console.log(a)
        
        s[i-2]= a
       
    }
    
}
// console.log("s",s)
for(let val of s){
for(let v in l){
    if(val == l[v]){
        // console.log(val,l[v])
        r +=v
    }
}
    
}

return r

};