/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
        
    
    // let arr = []
    // for (let i = 0; i < code.length; i++) {
    //     arr.push([code[i], businessLine[i], isActive[i]])
    // }

    // // allowed characters
    // let pattern = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    //                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    //                "_","1","2","3","4","5","6","7","8","9","0"]

    // // business priority list
    // let bus = ["electronics","grocery","pharmacy","restaurant"]
    
    // // keep active (anything not strictly false)
    // let filter = arr.filter((v) => v[2] !== false)
    
    // // keep only codes composed fully of allowed characters, skip empty
    // let last = []
    // for (let val of filter) {
    //     if (!val[0] || val[0].length === 0) continue
    //     let a = 0
    //     for (let ch of val[0]) {
    //         if (pattern.includes(ch)) {
    //             a++
    //         }
    //     }
    //     if (a === val[0].length) {
    //         last.push(val)
    //     }
    // }

    // // FIX: treat unknown business lines as very large index so they appear after known ones
    // let res = last.sort((a, b) => {
    //     const ia = bus.indexOf(a[1])
    //     const ib = bus.indexOf(b[1])
    //     const va = ia === -1 ? Number.MAX_SAFE_INTEGER : ia
    //     const vb = ib === -1 ? Number.MAX_SAFE_INTEGER : ib
    //     return va - vb
    // })

    // // now select only entries whose businessLine exists in bus (preserves original intent)
    // let r = []
    // for (let i = 0; i < res.length; i++) {
    //     for (let j = 0; j < bus.length; j++) {
    //         if (res[i][1] == bus[j]) {
    //             r.push(res[i][0])
    //         }
    //     }
    // }

    // return r
    let keys = [];
    const categories = ["electronics", "grocery", "pharmacy", "restaurant"];
    for (let i = 0; i < code.length; i++) {
        if (/^[a-zA-Z0-9_]+$/.test(code[i]) && categories.includes(businessLine[i]) && isActive[i]) {
            keys.push(i);
        }
    }

    return keys.sort((i, j) => businessLine[i].localeCompare(businessLine[j]) || (code[i] > code[j] ? 1 : (code[i] === code[j] ? 0 : -1))).map(i => code[i]);
};