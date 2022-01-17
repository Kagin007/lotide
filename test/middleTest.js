const assertArraysEqual = require("../assertArraysEqual");
const middle = require('../middle')

assertArraysEqual(middle([2,3,4,5]), [3,4]); //=> should assert true
assertArraysEqual(middle([2,3,5]), [3]); //=> should assert true