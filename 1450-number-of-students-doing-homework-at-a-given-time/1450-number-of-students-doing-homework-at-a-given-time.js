/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
        let c = 0
    for(let i=0;i<startTime.length;i++){
        
        let a =  startTime[i]
        let b = endTime[i]
        
        while(a<=b){
            if(a==queryTime){
                c++
            }
            // console.log(a)
           a++
            
        }
        // console.log("===")   
    }
    return c
};