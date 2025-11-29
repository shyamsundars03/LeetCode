/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
        date =  date.split("-")
    // console.log(date)
    
let res =  date.map((v)=> Number(v).toString(2)).join("-")

return res
};