function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  let slicer = Math.floor(arr.length / 2);
  let left = arr.slice(0, slicer);
  let right = arr.slice(slicer, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(a, b) {
  let result = [];

  while(a.length && b.length) {
    if(a[0] <= b[0]) {
      result.push(a.shift());
    } else {
      result.push(b.shift());
    }
  }
  result.push(...a, ...b);
  return result;
}

module.exports = mergeSort;