/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    
    const chars = [
        'A','B','C','D','E','F','G','H','I','J',
        'K','L','M','N','O','P','Q','R','S','T',
        'U','V','W','X','Y','Z'
    ];

    let ans = '';

    while (columnNumber > 0) {

      
        columnNumber--;
        let rem = columnNumber % 26;
        ans = chars[rem] + ans;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return ans;

};