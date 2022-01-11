const eqArrays = function (arrayOne, arrayTwo) {
  for (let index in arrayOne) {
    if (arrayOne[index] !== arrayTwo[index]) {
      return false
    }
  }
  return true
};

const assertArraysEqual = function (arrayOne, arrayTwo) {
  let result = eqArrays(arrayOne, arrayTwo)
  if (result) {
    console.log(`💖 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`👎 Assertion Failed: ${arrayOne} !== ${arrayOne}`);
  }
};

const flatten = function (array) {
  let newArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let innerArray of element) {
        newArray.push(innerArray)
      }
    } else {
      newArray.push(element)
    }
  }
  return newArray
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])