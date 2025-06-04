/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
        let w = [...words]
    
    for(let i=0;i<w.length;i++){
        let pali = w[i].split("").reverse("").join("")
        // console.log(pali)
        if(words[i]=== pali){
            return words[i]
        }
        
    }
    return ""
};