/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
        let a = [] 
    let f= {}
    
    for(let val of words){
        f[val] = (f[val] || 0)+1
    }
    
    console.log(f)
    
    
    for(let val in f){
        a.push([val, f[val]])
    }
    // console.log(a)
    
a.sort((a, b) => {
    // 🔹 Step 1: Descending order for numbers
    if (a[1] !== b[1]) {
        return b[1] - a[1]   // reverse order
    }

    // 🔹 Step 2: Ascending order for strings
    return a[0].localeCompare(b[0])
})
    console.log(a)
    a.length=k
    console.log("adefs")
    let res  = []
    
    for(let val of a){
        res.push(val[0])
    }
    console.log(res)
    return res
};