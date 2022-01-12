const eqArrays = function(arrayOne, arrayTwo) {
  for (let index in arrayOne) {
    if (arrayOne[index] !== arrayTwo[index]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`💖 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`👎 Assertion Failed: ${arrayOne} !== ${arrayOne}`);
  }
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (evenNumCheck(array.length)) {
    //if length is even...
    let arrayPosition = (array.length / 2) - 1;
    return array.slice(arrayPosition, arrayPosition + 2);
  } else {
    //if length is odd...
    let arrayPosition = (Math.floor(array.length / 2));
    return array.slice(arrayPosition, arrayPosition + 1);
  }
};

const evenNumCheck = function(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

assertArraysEqual(middle([2,3,4,5]), [3,4]); //=> should assert true
assertArraysEqual(middle([2,3,5]), [3]); //=> should assert true