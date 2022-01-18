const countOnly = function(allItems, itemsToCount) {
  const countObject = {};
  //loop through array
  for (let key of allItems) {
  //check if key is true  
    if (itemsToCount[key]) {
      if (countObject[key]) {
        countObject[key] += 1;
      } else {
        countObject[key] = 1
      }
    }    
  }
  return countObject
};



module.exports = countOnly;
