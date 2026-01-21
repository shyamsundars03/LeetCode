/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    

for(let i=0;i<haystack.length;i++){
    for(let j=i;j<haystack.length+1;j++){
        let a = haystack.slice(i,j)
        // console.log(a)
        if(a.length==needle.length){
            // console.log("a is :",a)
            // console.log(i)
            if(a == needle){
                a= ""
                return i 
            }
        }
        
    }
}



return -1

};