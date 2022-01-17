const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (evenNumCheck(array.length)) {
    //if length is even...
    let arrayPosition = (array.length / 2) - 1;
    return array.slice(arrayPosition, arrayPosition + 2);
  } else {
    //if length is odd...
    let arrayPosition = (Math.floor(array.length / 2));
    return array.slice(arrayPosition, arrayPosition + 1);
  }
};

const evenNumCheck = function(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = middle

