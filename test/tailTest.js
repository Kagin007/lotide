const tail = require('../tail');
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("#tail drops the first element in an array and returns the rest (tail) of the array", () => {
  it("return [2, 3] from [1, 2, 3]" , () => {
    const actualResult = tail([1, 2, 3]);
    const expectedResult = [2, 3];
    expect(actualResult).to.deep.equal(expectedResult)
  })

  it("return an empty array if an empty array is entered", () => {
    const actualResult = tail([]);
    const expectedResult = [];
    expect(actualResult).to.deep.equal(expectedResult)
  })
})