const findKeyByValue = require('../findKeyByValue');
const expect = require('chai').expect;

describe("#findKeyByValue takes a value and returns the key for that value", () => {
  it("return 'drama'", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    const actualResult = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expectedResult = 'drama';
    expect(actualResult).to.deep.equal(expectedResult)
  })

  it("return an empty array if an empty array is entered", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const actualResult = findKeyByValue(bestTVShowsByGenre, "That '70s show");
    const expectedResult = undefined;
    expect(actualResult).to.deep.equal(expectedResult)
  })
});
