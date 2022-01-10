const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💖 Assertion Passed: ${actual} === ${expected}`);
  }
};

const head = function(arr) {
  let head = arr[0]
  return head
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
assertEqual(head(["Labs"]), "Labs");
assertEqual(head([]), undefined);
