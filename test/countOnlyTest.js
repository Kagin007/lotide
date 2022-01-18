const countOnly = require('../countOnly');
const expect = require('chai').expect;

describe("#countOnly counts the number of occurances in a given of a given", () => {
  it("return Jason in first position" , () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const actualResult = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })['Jason'];
    const expectedResult = 1;
    expect(actualResult).to.deep.equal(expectedResult)
  })
})