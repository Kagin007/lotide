const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💖 Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(arr) {
  let newArray = [...arr];
  newArray.splice(0,1);
  return newArray;
};

let testArray = [1,2,3];

assertEqual(tail(testArray)[0], 2);
assertEqual(tail(testArray).length, 2);
assertEqual(tail(testArray).length, 3);
assertEqual(tail([]).length, [].length);