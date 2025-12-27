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

    function reverse(str){
        return str.split("").reverse().join("");
    }

    function helper(s){
        let i = 0;

        // match prefix chars with suffix chars from end
        for(let j = s.length - 1; j >= 0; j--){
            if(s[i] === s[j]) i++;
        }

        // if entire string is palindrome already
        if(i === s.length) return s;

        // remaining unmatched suffix
        const suffix = s.slice(i);

        // reverse it to prepend
        const prefixToAdd = reverse(suffix);

        // recursively process the prefix part
        const mid = helper(s.slice(0, i));

        // build final string
        return prefixToAdd + mid + suffix;
    }

    return helper(s);





















};