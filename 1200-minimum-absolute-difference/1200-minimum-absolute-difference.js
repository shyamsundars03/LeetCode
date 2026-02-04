/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
arr = arr.sort((a,b)=>a-b)

let a = []


for(let i=0;i<arr.length-1;i++){

a.push(Math.floor(arr[i+1]-arr[i]))



}

console.log(a)
let diff =  Math.min(...a)

let res = []


for(let i=0;i<arr.length;i++){


if(Math.floor(arr[i+1]-arr[i])==diff){
    res.push([arr[i],arr[i+1]])
}


}


console.log(res)


return res





};