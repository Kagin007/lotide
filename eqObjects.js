const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;