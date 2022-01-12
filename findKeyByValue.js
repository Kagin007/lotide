const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💖 Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  let keyArray = Object.keys(object)
  for (let key of keyArray) {
    //object[key] returns the value of that key
    if(object[key] === value) {
      return key
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

