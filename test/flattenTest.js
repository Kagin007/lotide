const flatten = require('../flatten');
const expect = require('chai').expect;

describe("#flatten takes nested arrays and transforms them into one array", () => {
  it("return [1,2,3,4,5,6] from [1, 2, [3, 4], 5, [6]]" , () => {
    const actualResult = flatten([1, 2, [3, 4], 5, [6]]);
    const expectedResult = [1, 2, 3, 4, 5, 6];
    expect(actualResult).to.deep.equal(expectedResult)
  })

  it("return an empty array if an empty array is entered", () => {
    const actualResult = flatten([]);
    const expectedResult = [];
    expect(actualResult).to.deep.equal(expectedResult)
  })
})
