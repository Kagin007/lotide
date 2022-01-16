const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let index in arrayOne) {
    if (arrayOne[index] !== arrayTwo[index]) {
      if (Array.isArray(arrayOne[index])) {
        if (!eqArrays(arrayOne[index], arrayTwo[index])) {
          return false
          } 
        } else {
        return false          
        }
      }   
    }
  return true    
  }

console.log(eqArrays([1,2],[1,2])) //=> true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true

console.log(eqArrays([[3, 4], [4, 6]], [[2, 3], [4, 5]])) // => false

console.log(eqArrays([[2, 1], [4]], [[2, 3], 4])) // => false

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false

console.log(eqArrays([[2, 1], [4[2,3]]], [[2, 1], [4[2,3]]])) // => true