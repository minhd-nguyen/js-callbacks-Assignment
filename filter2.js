var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array.

// Your code goes here
let innerStr = misc.filter(function(misc){
    for (i = 0; i< misc.length; i++) {
        if (typeof(misc[i]) !== "string") {
            return false
        }
        return true;
    }     
})
console.log(innerStr);