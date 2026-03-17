/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
 
    let res = [];
    let s = "";

    for (let i = 0; i < str2.length; i++) {
        s += str2[i]; // build candidate string step-by-step

        // Check if s divides BOTH strings
        if (
            str1.length % s.length === 0 &&
            str2.length % s.length === 0 &&
            s.repeat(str1.length / s.length) === str1 &&
            s.repeat(str2.length / s.length) === str2
        ) {
            res.push(s);
        }
    }

    return res.length ? res[res.length - 1] : "";
};