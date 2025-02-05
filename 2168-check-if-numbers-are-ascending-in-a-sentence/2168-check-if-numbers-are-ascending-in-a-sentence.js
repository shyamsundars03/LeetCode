/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {

    let words = s.split(" ")

    let a = -1

    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (!isNaN(word)) {
            let num = Number(word)
            if (num <= a) {
                return false
            } a = num
        }
    }

return true

};