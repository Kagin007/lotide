const eqObjects = require('../eqObjects');
const {assert} = require('chai')

describe("#eqObjects, checks two objects to see if they are the same", () => {
  it('return true with {b: ["2",4], a: ["1"]} & {b: ["2",4], a: ["1"]}' , () => {
    const actualResult = eqObjects({b: ["2",4], a: ["1"]}, {b: ["2",4], a: ["1"]});
    assert.isTrue(actualResult)
  })

  it('return false with { a: ["2", 3], b: ["2",4] } & b: {["2",4], a: ["1"]}', () => {
    const actualResult = eqObjects({ a: ["2", 3], b: ["2",4] }, {b: ["2",4], a: ["1"]});
    assert.isFalse(actualResult)
  })
})