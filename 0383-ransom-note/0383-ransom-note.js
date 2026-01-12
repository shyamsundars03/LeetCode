/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let f1 ={}
    for(let val of ransomNote){
        f1[val] =  (f1[val] || 0)+1
    }
    let f2={}
    for(let val of magazine){
        f2[val] =  (f2[val] || 0)+1
    }
    
    f1 = Object.entries(f1)
    f2 = Object.entries(f2)
    console.log(f1)
    console.log(f2)
    const map = new Map(f2)

    const result = f1.map(([char, value]) => {
        const matchedValue = map.get(char) ?? 0
        return [char, value - matchedValue]
    })

    return result.every(([, remaining]) => remaining <= 0)
};