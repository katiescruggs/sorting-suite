const chai = require('chai');
const assert = chai.assert;
const bubbleSort = require('../bubbleSort.js');

describe('BubbleSort', function() {
  it('should be a function', function() {
    assert.isFunction(bubbleSort);
  });

  it('should sort values in array parameter', function() {
    let array = [3, 10, 8, 28, 199, 13];
    assert.deepEqual(bubbleSort(array), [3, 8, 10, 13, 28, 199]);

    array = [10, 1, 4, 3, 9, 7, 6, 8, 2, 5];
    assert.deepEqual(bubbleSort(array), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should sort characters in array parameter', function() {
    let array = ['d', 'b', 'a', 'c'];
    assert.deepEqual(bubbleSort(array), ['a', 'b', 'c', 'd']);
  })
});