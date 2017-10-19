const chai = require('chai');
const assert = chai.assert;
const quickSort = require('../quickSort.js');

const {
  arrayChar,
  array10, 
  array1000,
  array10000,
  array20000,
  array100000,
  array200000,
  array300000
} = require('../arrays.js');

describe('QuickSort', function() {
  it('should be a function', function() {
    assert.isFunction(quickSort);
  });
  
  it('should sort characters in array of length 10', function() {
    let result = quickSort(arrayChar);

    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 10', function() {
    let result = quickSort(array10);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 1000', function() {
    let result = quickSort(array1000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 1,0000', function() {
    let result = quickSort(array10000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 2,0000', function() {
    let result = quickSort(array20000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 100,000', function() {
    let result = quickSort(array100000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 200,000', function() {
    let result = quickSort(array200000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });

  it('should sort numbers in array of length 300,000', function() {
    let result = quickSort(array300000);
    for(let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    }
  });
});