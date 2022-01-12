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


const letterPositions = function(sentence) {
  const results = {};
  let noSpaces = sentence.split(' ').join('');

  for (let index in noSpaces) {
    //does the letter already exist in the object?
    let letter = noSpaces[index]
    if (results[letter]) {
    //if yes push new index to the object's array value
      results[letter].push(Number(index))
    } else {
    //if not create a new key with a new array value
      results[letter] = [Number(index)]
    }
  }
  return results;
};

testObject = letterPositions("adam")

assertArraysEqual(testObject['a'], [0, 2]);
assertArraysEqual(testObject['d'], [1]);
assertArraysEqual(testObject['m'], [3]);
