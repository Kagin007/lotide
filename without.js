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

const without = function (source, itemsToRemove) {
  const newArray = [];
  let x = 0
  while (x < source.length) {
    if (!itemsToRemove.includes(source[x])) {
      newArray.push(source[x])
    }
    x++ 
  }
  console.log(newArray)
};


without([1, 2, 3], [1]) // => [2, 3]
without(["1", 2], [1, 2]) // => ["1"]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
