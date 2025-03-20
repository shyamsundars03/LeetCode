/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let str = title.split(" ").map((word)=> (word.length >2)?  word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase() :word.toLowerCase() ).join(" ")

// console.log(str)
return str
};