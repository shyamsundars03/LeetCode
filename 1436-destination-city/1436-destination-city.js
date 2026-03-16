/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
        
    let res=[]
    
    let frq = {}
    for(let val of paths){
        let v = val
        for(let vv of v){
            frq[vv] = (frq[vv] || 0)+1
        }
    }
    
    console.log(frq)
    let val =  Object.entries(frq).filter((val)=> val[1]==1).map((val)=> val[0])
    console.log(val)
    
    for(let v of paths){
        console.log(v[1])
        if(val.includes(v[1])){
            console.log("sdv")
            res.push(v[1])
        }
        
    }
    
    
    
    console.log(res)
    return res[0]
    
};