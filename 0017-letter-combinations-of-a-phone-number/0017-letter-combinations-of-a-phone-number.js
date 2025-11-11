/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
        let arr= [["a","b","c"], ["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"],["w","x","y","z"]]
    
    let res = []
    if(digits.length==1){
            let a = arr[Number(digits)-2]
            for(let val of a){
                res.push(val)
            }
    }else{
        let r = []
        for(let val of digits){
            let a = arr[Number(val)-2]
            r.push(a)
        }
        
        res = [""];  // base
        for (let group of r) {
            let temp = [];
            for (let prefix of res) {
                for (let letter of group) {
                    temp.push(prefix + letter);
                }
            }
            res = temp;
        }
    }
    return res
    
};