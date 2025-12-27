/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {



//         function isPali(ss,l=0,r=ss.length-1){
//         if(l>=r) return true
//         // console.log(ss[l],ss[r])
//         if(ss[l] !== ss[r]) return false
        
//         return isPali(ss,l+1,r-1)
        
//     }

// if(isPali(s)){

// return s


// }


// let res = s;

//     for(let i = s.length - 1; i >= 0; i--){

//         const c = s.slice(i+1).split("").reverse().join("") + s;

//         if(isPali(c)){
//             return c;
//         }
//     }

//     return res;

     let n = s.length;
    if (n === 0) return s;
    let left = 0;
    for (let right = n - 1; right >= 0; right--) {
        if (s[left] === s[right]) {
            left++;
        }
    }
    if (left === n) return s;
    let res = s.slice(left).split('').reverse().join('');
    let prefixPalindrome = shortestPalindrome(s.slice(0, left))
    return res + prefixPalindrome + s.slice(left);





















};