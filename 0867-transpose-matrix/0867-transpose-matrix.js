/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    
    let res = []

    for (let i = 0; i < matrix[0].length; i++) {
        let b = []


        for (let j = 0; j < matrix.length; j++) {
            b.push(matrix[j][i])
        }

        res.push(b)
    }

    return res

};