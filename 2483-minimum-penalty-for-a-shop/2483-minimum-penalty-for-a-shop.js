/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {

//   let arr = [];
//   for (let v of customers) {
//     arr.push(v === "Y" ? 1 : 0);
//   }

//   let penalties = [];

//   for (let i = 0; i <= customers.length; i++) {


//     let sum = arr.reduce((a, c) => a + c, 0);
//     penalties.push(sum);

//     if (i < customers.length) {
//       arr[i] = arr[i] === 1 ? 0 : 1;
//     }
//   }

//   return penalties.indexOf(Math.min(...penalties));
         let bestTime = 0;
    let minPenalty = 0;
    let prefix = 0;
    
    for (let i = 0; i < customers.length; i++) {
        prefix += customers[i] === 'Y' ? -1 : 1;
        
        if (prefix < minPenalty) {
            bestTime = i + 1;
            minPenalty = prefix;
        }
    }
    
    return bestTime;



};