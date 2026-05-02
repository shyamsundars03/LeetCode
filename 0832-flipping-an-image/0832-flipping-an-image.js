/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
for(let i=0;i<image.length;i++){

let a = image[i]
a.reverse()
console.log(a)
let b =  a.map((val)=> val==0?1:0)
console.log(b)
image[i]=b

}

return image




};