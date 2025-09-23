/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
        let vowels = "aeiouAEIOU";
    let arr = Array.from(s);

    let v = arr.filter(ch => vowels.includes(ch));


    let result = arr.map(ch => {
        if (vowels.includes(ch)) {
            return v.pop();  
        } else {
            return ch;
        }
    });

    return result.join("");
};