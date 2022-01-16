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

const assertArraysEqual = function (arrayOne, arrayTwo) {
  let result = eqArrays(arrayOne, arrayTwo)
  if (result) {
    console.log(`💖 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`👎 Assertion Failed: ${arrayOne} !== ${arrayOne}`);
  }
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
        }
      } else {
          return false         
      }
    }
  }
  return true;
};

// const ab = {b: ["2",4], a: ["2", 4]};
// const ba = { b: "2", a: "1" };

// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: ["2", 3], b: ["2",4] };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { d: ["2", 3], c: "1",  };
// const dc = { d: ["2", 4], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false