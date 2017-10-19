const chai = require('chai');
const assert = chai.assert;
const insertionSort = require('../insertionSort.js');

const {
  arrayChar,
  array10, 
  array1000,
  array10000,
  array20000
} = require('../arrays.js');

describe('InsertionSort', function() {
  it('should be a function', function() {
    assert.isFunction(insertionSort);
  });
  
  it('should sort characters in array of length 10', function() {
    let result = insertionSort(arrayChar);

    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 10', function() {
    let result = insertionSort(array10);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 1000', function() {
    let result = insertionSort(array1000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 10000', function() {
    let result = insertionSort(array10000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 20000', function() {
    let result = insertionSort(array20000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });
});