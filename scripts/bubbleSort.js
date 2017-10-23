module.exports = function bubbleSort(arr) {
  for(var j = 0; j < arr.length; j++) {
    let didSwap = false;
    for(var i = 1; i < arr.length - j; i++) {
      if(arr[i] < arr[i-1]) {
        didSwap = true;
        [arr[i-1], arr[i] ] = [arr[i], arr[i-1]];
      }  
    }
    if(!didSwap) {
      return arr;
    }
  }
  return arr;  
};



