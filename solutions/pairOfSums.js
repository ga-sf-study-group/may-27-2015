
function pairOfSums(array, sum) {
    var pairs = [];
    for(var i = 0; i < array.length-1; i++) {
        for(var j = i+1; j < array.length; j++) {
            pairs.push([array[i], array[j]]);
        }
    }
    return pairs.filter(function(pair) {
        return pair[0] + pair[1] === sum;
    });
}

console.log(pairOfSums([1,2,64,36,50,50,90,10,30,70], 100))
