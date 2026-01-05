/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
        sentence = sentence.split(" ")
    console.log(sentence)
    let s = "ma"
    let a = "a"
    let vow = ["a","e","i","o","u","A","E","I","O","U"]

    let last = "ma"
    for(let i=0;i<sentence.length;i++){
        let b= sentence[i].split("")
        if(vow.includes(sentence[i][0])){
            last += a
            sentence[i] = b.join("")+last
            console.log(sentence[i])
        }else {
            last += a
            sentence[i] = b.slice(1).join("") + sentence[i][0] +last
            console.log("others",sentence[i][0])
        }
    }


return sentence.join(" ")




};