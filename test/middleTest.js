const middle = require('../middle');
const {expect} = require('chai');

//note: can also use assert.deepEqual when comparing arrays/objects

describe("#middle function", () => {
  it("returns 3 from [2,3,4]", () => {
    const actualResult = middle([2,3,4]);
    const expectedResult = [3];
    expect(actualResult).to.deep.equal(expectedResult);
  })

  it("return [3,4] when middle([2,3,4,5])", () => {
    const actualResult = middle([2,3,4,5]);
    const expectedResult = [3,4];
    expect(actualResult).to.deep.equal(expectedResult);
  })
});
