const findKeyByValue = function (object, value) {
  let keyArray = Object.keys(object)
  for (let key of keyArray) {
    //object[key] returns the value of that key
    if(object[key] === value) {
      return key
    }
  }
};

module.exports = findKeyByValue;
