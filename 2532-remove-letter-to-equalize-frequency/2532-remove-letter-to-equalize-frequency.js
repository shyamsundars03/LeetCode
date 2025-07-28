/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    for (let i = 0; i < word.length; i++) {
        let rem = word.slice(0, i) + word.slice(i + 1); // remove i-th char

        let frq = {};
        for (let v of rem) {
            frq[v] = (frq[v] || 0) + 1;
        }

        let res = [];
        for (let v in frq) {
            res.push(frq[v]);
        }

        if ([...new Set(res)].length === 1) return true;
    }
    return false;
};
