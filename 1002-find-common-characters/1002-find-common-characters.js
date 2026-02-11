/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
    let arr = []

    // STEP 1: Build frequency maps
    for (let i = 0; i < words.length; i++) {
        let frq = {}
        let word = words[i]

        for (let ch of word) {
            frq[ch] = (frq[ch] || 0) + 1
        }

        arr.push(frq)
    }

    // STEP 2: Intersect
    let result = []
    let firstMap = arr[0]

    for (let ch in firstMap) {

        let minCount = firstMap[ch]

        for (let i = 1; i < arr.length; i++) {

            if (!arr[i][ch]) {
                minCount = 0
                break
            }

            minCount = Math.min(minCount, arr[i][ch])
        }

        // STEP 3: Push duplicates
        for (let k = 0; k < minCount; k++) {
            result.push(ch)
        }
    }

    return result
};