const chai = require('chai');
const assert = chai.assert;
const bubbleSort = require('../bubbleSort.js');

const {
  arrayChar, 
  array10, 
  array1000,
  array10000,
  array20000,
} = require('../arrays.js');

describe('BubbleSort', function() {
  it('should be a function', function() {
    assert.isFunction(bubbleSort);
  });
  
  it('should sort characters in array of length 10', function() {
    let result = bubbleSort(arrayChar);

    for(let i = 0; i < result.length-1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 10', function() {
    let result = bubbleSort(array10);

    for(let i = 0; i < result.length-1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 1000', function() {
    let result = bubbleSort(array1000);

    for(let i = 0; i < result.length-1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 10000', function() {
    let result = bubbleSort(array10000);

    for(let i = 0; i < result.length-1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });
});