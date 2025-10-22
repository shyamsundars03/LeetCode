/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let w = [...new Set(sentence)]
    if(w.length==26) return true
    else return false
};