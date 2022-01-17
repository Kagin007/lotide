const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLeters = require('./countLeters');
const countOnly = require('./countOnly');
const eqArray = require('./eqArray');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const recursiveEqArrays = require('./recursiveEqArrays');
const recursiveEqObj = require('./recursiveEqObj');
const takeUntil = require('./takeUntil');
const without = require('./without');
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLeters: countLeters,
  countOnly: countOnly,
  eqArray: eqArray,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  recursiveEqArrays: recursiveEqArrays,
  recursiveEqObj: recursiveEqObj,
  takeUntil: takeUntil, 
  without: without,
};