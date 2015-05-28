var findPairs = function(arr, sum) {
  var pairs = [];
  for (i = 0; i < arr.length; i += 1) {
    for (j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === sum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
};

// another solution: loop through once and check difference between
// current element and sum, then loop up difference in hash map