# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual([])`: checks if two arrays are the same,
* `assertEqual([])`: asserts if two array are the same
* `assertObjectsEqual([])`: checks if two Objects are teh same
* `countLetters([])`: count the number of times a letter appears in an array
* `countOnly([])`: count how many times an element appears in an array
* `eqArrays([])`: checks if two arrays are teh same
* `eqObjects({})`: checks if two objects are the same
* `findKeyByValue([])`:
* `flatten([])`: 'flattens' nested arrays into one array
* `letterPositions([])`: advises on the index position of a given letter
* `recursiveEqArrays([])`: asserts if two arrays are teh same, including nested arrays
* `BETA recursiveEqObj({})`: not working yet
* `head([array])`: returns the first element of an array
* `tail([array])`: cuts the head off the array and returns the difference
* `middle([array])`: returns the middle elements of an array