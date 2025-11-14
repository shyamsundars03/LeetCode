/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
        let vow = []
    let con = []
    let v = ["a","e","i","o","u","A","E","I","O","U",]
    for(let val of s){
        if(v.includes(val)){
            vow.push(val)
        }else{
            con.push(val)
        }
    }
    
    let vowF = {}
    let vowL =0
    let conF = {}
    let conL =0
    
    for(let val of vow){
        vowF[val] = ( vowF[val]  ||0)+1
        if(vowF[val]> vowL){
            vowL = vowF[val]
        }
    }
    // console.log(vowL)
    for(let val of con){
        conF[val] = ( conF[val]  ||0)+1
        if(conF[val]> conL){
            conL = conF[val]
        }
    }
    // console.log(conL)
    
return vowL + conL
};