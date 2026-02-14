/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    
  let l = 1       
  let c = 0        

  for (let i = 0; i < s.length; i++) {


    let idx = s[i].charCodeAt(0) - 97
    let w = widths[idx]


    if (c + w > 100) {
      l++
      c = 0
    }

  
    c += w
  }

  return [l, c]
};