const eqArrays = function (arrayOne, arrayTwo) {
  for (let index in arrayOne) {
    if (arrayOne[index] !== arrayTwo[index]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arrayOne, arrayTwo) {
  let result = eqArrays(arrayOne, arrayTwo)
  if (result) {
    console.log(`💖 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`👎 Assertion Failed: ${arrayOne} !== ${arrayOne}`);
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, '3'], [1, 2, 3])
