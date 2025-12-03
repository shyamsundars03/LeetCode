/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
let l = 10
let v = n
let p = "A"

while(v>=0){
    v= v-l
    // console.log(v)
    if(p == "A"){
        p = "B"   
    }else{
        p = "A"
    }
    console.log(v,p)
    l--
}

return p=="A" ? true : false
    
};