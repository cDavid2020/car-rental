/*
Create a new file in app called fleet.js. This file will represent a fleet of cars. Create an array literal called fleet that contains 3 objects. Each object should represent a car and have the following properties:

    make
    model
    year
    color
    dailyRate

Export this array as a default export (ESM).
*/

const fleet = [
  {
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      color: 'blue',
      dailyRate: 50
  },
  {
      make: 'Honda',
      model: 'Civic',
      year: 2019,
      color: 'red',
      dailyRate: 40
  },
  {
      make: 'Ford',
      model: 'Mustang',
      year: 2018,
      color: 'black',
      dailyRate: 60
  }
];

export default fleet;
