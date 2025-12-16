/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let a = Array.from(s);
    let b = Array.from(t);

    function remove(c) {
        for (let i = 0; i < c.length; i++) {
            if (c[i] === "#") {
                if (i === 0) {
                    c.splice(i, 1);
                } else {
                    c.splice(i - 1, 2);
                }
                return remove(c);
            }
        }

        return c;
    }

    let aa = remove(a);
    let bb = remove(b);

    return aa.join("") === bb.join("");
};