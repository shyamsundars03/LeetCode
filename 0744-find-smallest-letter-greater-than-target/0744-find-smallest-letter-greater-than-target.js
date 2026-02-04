/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let arr = []
for(let val of letters){
arr.push([val, val.charCodeAt()])

}

console.log(arr)
let a =  arr.sort((a,b)=>a[1]-b[1])

console.log(a)

for(let i=0;i<arr.length;i++){
    if(a[i][1] > target.charCodeAt()){
        return arr[i][0]
    }
}
return a[0][0]





};