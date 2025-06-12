/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
        if(numRows <=1){
        return [[1]]
    }else{
        
        let out = [[1],[1,1]]
        
        for(let i=1;i<out.length;i++){
            let one = out[i]
            let val =[]
            for(let j=0;j<one.length-1;j++){
                
                 val.push(one[j]+one[j+1])
                
            }
            // console.log(val)
            val.unshift(1)
            // console.log(val)
            val.push(1)
            // console.log(val)
            // console.log("val:",val.length)
            if(val.length <= numRows){
                out.push(val)
            }
            
            
        }
        
        // console.log(out)
        return out
        
    }
    
    // console.log(out)
};