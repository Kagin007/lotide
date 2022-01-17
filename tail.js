const tail = function(arr) {
  let newArray = [...arr];
  newArray.splice(0,1);
  return newArray;
};

module.exports = tail;