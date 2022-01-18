const letterPositions = function(sentence) {
  const results = {};
  let noSpaces = sentence.split(' ').join('');

  for (let index in noSpaces) {
    //does the letter already exist in the object?
    let letter = noSpaces[index]
    if (results[letter]) {
    //if yes push new index to the object's array value
      results[letter].push(Number(index))
    } else {
    //if not create a new key with a new array value
      results[letter] = [Number(index)]
    }
  }
  return results;
};

module.exports = letterPositions;
