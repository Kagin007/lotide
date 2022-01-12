const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false
  }
  for (let index in arrayOne) {
    if (arrayOne[index] !== arrayTwo[index]) {
      return false
    }
  }
  return true
};

const eqObjects = function(object1, object2) {
  //check that the length of the keys are the same in both objects
  oneKeyArray = Object.keys(object1);
  twoKeyArray = Object.keys(object2);

  if (oneKeyArray.length !== twoKeyArray.length) {
    return false;
  }   
  //see if the key of object1 returns the same value in object2
  for (let key of oneKeyArray) {
    if (object1[key] !== object2[key]) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false
        } else {
          return true
        }
      }
      return false
    }      
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if(inspect(actual) && inspect(expected)) {
    if (eqObjects(actual, expected)) {
      console.log(`💖 Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};


let objOne = { a: '1', b: 2 }
let objTwo = { b: 2, a: '1' }
let objThree = { a: '1', b: 3}
let objFour = { a: [1,2], b: 3}
let objFive = { b: 3, a: [1,2]}

assertObjectsEqual(objOne, objTwo)
assertObjectsEqual(objOne, objTwo)
assertObjectsEqual(objOne, objThree)
assertObjectsEqual(objFour, objFive)
assertObjectsEqual(objFive, objFour)


