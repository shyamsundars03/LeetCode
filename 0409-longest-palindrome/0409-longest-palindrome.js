/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
// let n = s.length
// if(n<=1) return s.length
// console.log(n)

// let frq = {}

// for(let val of s){
// frq[val] = (frq[val] ||0)+1
// }

// frq =  Object.entries(frq).sort((a,b)=>b[1]-a[1]).map((val)=> val[1])

// console.log(frq)

// let res= 0
// for(let val of frq){
// if(val==1) return res+val
// res+= val
// }

// return res

    const freqMap = new Map();
    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    let length = 0;
    let hasOdd = false;

    for (const count of freqMap.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1; 
            hasOdd = true;       
        }
    }

    return hasOdd ? length + 1 : length;

};