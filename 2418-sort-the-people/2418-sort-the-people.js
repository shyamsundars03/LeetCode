/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
        let arr = []
    
    for(let i=0;i<names.length;i++){
        arr.push([names[i],heights[i]])
    }
    // console.log(arr)
    
    let res =  arr.sort((a,b)=> b[1]-a[1]).map((val)=>val[0])
    // console.log(res)
    return res
    
};