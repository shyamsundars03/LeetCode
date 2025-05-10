/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let str =""
    const regex = /^[a-zA-Z]$/
    let letters =[]
    for(let i=0;i<s.length;i++){
                if(regex.test(s[i])){
                    letters.push(s[i])
                }
        }

    // console.log(letters)

for(let i=0;i<s.length;i++){
      if(regex.test(s[i])){
          str+=letters.pop()
          
      }else{
          str+=s[i]
      }
}

// console.log(str)
return str

};