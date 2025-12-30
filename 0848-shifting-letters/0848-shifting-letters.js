/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {

     // running suffix sum so each char knows total shift affecting it
  let total = 0;
  for (let i = shifts.length - 1; i >= 0; i--) {
    total = (total + shifts[i]) % 26;
    shifts[i] = total;
  }

  const res = s.split("");

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - 97;   // convert 'a'..'z' → 0..25
    const newCode = (code + shifts[i]) % 26;
    res[i] = String.fromCharCode(newCode + 97); // convert back
  }

  return res.join("");
    
};