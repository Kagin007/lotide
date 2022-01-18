const letterPositions = require('../letterPositions');
const expect = require('chai').expect;

describe("#letterPositions, returns the index positions of every letter in a string", () => {
  it("return [0,2] with input of 'adam'" , () => {
    const actualResult = letterPositions("adam")['a'];
    const expectedResult = [0, 2];
    expect(actualResult).to.deep.equal(expectedResult)
  })

  it("return ['d'] ", () => {
    const actualResult = letterPositions('adam');
    const expectedResult = { a: [ 0, 2 ], d: [ 1 ], m: [ 3 ] };
    expect(actualResult).to.deep.equal(expectedResult)
  })
})
