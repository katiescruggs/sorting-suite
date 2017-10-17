module.exports = function bubbleSort(arr) {
  for(var j = 0; j < arr.length; j++) { 
    for(var i = 1; i < arr.length; i++) {
      if(arr[i] < arr[i-1]) {
        [arr[i-1], arr[i] ] = [arr[i], arr[i-1]];
      }  
    }
  }
  return arr;  
};



