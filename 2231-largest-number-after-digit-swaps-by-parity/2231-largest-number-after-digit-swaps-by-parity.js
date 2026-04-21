/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    let answer = '';
    const sorted = [...String(num)].sort((a, b) => a - b);

    const odd = sorted.filter((i) => i % 2 === 1);
    const even = sorted.filter((i) => i % 2 === 0);
    
    for (let i = 0; i < sorted.length; i++) {
        if (String(num)[i] % 2 === 0) {
            answer += even.pop();
        } else {
            answer += odd.pop();
        }
    }

    return Number(answer)
};