/*
It's assuming that the calcRentalCarCost is a module that you have imported in your code and the fleet, person are the objects that are available in your code and numOfDays is the number of days for which you want to calculate the rental car cost.

*/

const calcRentalCarCost = require('./calcRentalCarCost');
const fleet = [{...}, {...}, {...}];
const person = {...};
const numOfDays = 7;

const cost = calcRentalCarCost(fleet[0], person, numOfDays);
console.log(cost);

