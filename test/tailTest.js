const tail = require('../tail');
const assertEqual = require('../assertEqual');

//tests
let testArray = [1,2,3];

assertEqual(tail(testArray)[0], 2);
assertEqual(tail(testArray).length, 2);
assertEqual(tail(testArray).length, 3);
assertEqual(tail([]).length, [].length);