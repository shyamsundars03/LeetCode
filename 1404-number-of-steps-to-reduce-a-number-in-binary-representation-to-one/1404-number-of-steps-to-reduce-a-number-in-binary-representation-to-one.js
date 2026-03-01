/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
     function addBinaryOne(binary) {
        let arr = binary.split('');
        let i = arr.length - 1;

        // propagate carry
        while (i >= 0 && arr[i] === '1') {
            arr[i] = '0';
            i--;
        }

        if (i >= 0) {
            arr[i] = '1';
        } else {
            // all bits were 1 → add leading 1
            arr.unshift('1');
        }

        return arr.join('');
    }

    function helper(binary) {
        // base case
        if (binary === "1") return 0;

        // even → last bit 0
        if (binary[binary.length - 1] === '0') {
            return 1 + helper(binary.slice(0, -1));
        }

        // odd → add 1
        return 1 + helper(addBinaryOne(binary));
    }

    return helper(s);
};