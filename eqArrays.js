const eqArrays = function (arrayOne, arrayTwo) {
  for (let index in arrayOne) {
    if (arrayOne[index] !== arrayTwo[index]) {
      return false
    }
  }
  return true
};

module.exports = eqArrays;
