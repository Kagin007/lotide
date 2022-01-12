const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💖 Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetter = function (string) {
  //loop through array
  let letterObject = {};
  let noSpaces = string.split(' ').join('');
  for (let letter of noSpaces) {
    if (letterObject[letter]) {
      letterObject[letter] += 1;
    } else {
      letterObject[letter] = 1;
    }
  }
    return letterObject
};

console.log(countLetter("lighthouse in the house"))