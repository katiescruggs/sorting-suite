function quickSort(array) {
 if (array.length <= 1) {
    return array;
  }

  const pivot = array.pop(); 
  let lesserArray = [];
  let greaterArray = [];

  for(let i = 0; i < array.length; i++) {
    if(array[i] < pivot) {
      lesserArray.push(array[i]);
    } else {
      greaterArray.push(array[i]);
    }
  }

  return [ ...quickSort(lesserArray), pivot, ...quickSort(greaterArray)];
}

module.exports = quickSort;