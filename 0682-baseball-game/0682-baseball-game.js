/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
        let records =[];
    
    for(let i=0;i<operations.length;i++){
        if(Number(operations[i])){
            records.push(Number(operations[i]))
        }
        else if(operations[i]==="C"){
            records.pop()
        }
        else if(operations[i]==="D"){
            records.push(Number(records[records.length-1]) * 2)
            // console.log(records[records.length-1])
        }
        else if(operations[i]=== "+"){
            records.push(Number(records[records.length-2]) +Number(records[records.length-1]))
        }
    }
    return records.reduce((a,c)=> a+c,0)
};