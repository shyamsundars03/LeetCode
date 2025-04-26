/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    s.sort((a,b)=>a-b)
g.sort((a,b)=>a-b)

    let i=0
    for(let j=0;j<s.length && i<g.length;j++){
    if(s[j]>=g[i]){
            i++
    }  
    }
    return i

};