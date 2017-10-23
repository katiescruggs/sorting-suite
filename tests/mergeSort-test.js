const chai = require('chai');
const assert = chai.assert;
const mergeSort = require('../scripts/mergeSort.js');

const {
  arrayChar,
  array10, 
  array1000,
  array10000,
  array20000,
  array100000,
  array200000,
  array300000
} = require('../scripts/arrays.js');

describe('MergeSort', function() {
  it('should be a function', function() {
    assert.isFunction(mergeSort);
  });
  
  it('should sort characters in array of length 10', function() {
    let result = mergeSort(arrayChar);

    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 10', function() {
    let result = mergeSort(array10);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 1000', function() {
    let result = mergeSort(array1000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 1,0000', function() {
    let result = mergeSort(array10000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 2,0000', function() {
    let result = mergeSort(array20000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 100,000', function() {
    let result = mergeSort(array100000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });
});