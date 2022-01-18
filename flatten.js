const flatten = function (array) {
  let newArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let innerArray of element) {
        newArray.push(innerArray)
      }
    } else {
      newArray.push(element)
    }
  }
  return newArray
}

module.exports = flatten;