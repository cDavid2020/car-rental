const TAX_RATE = 0.08;
const SERVICE_FEE = 24.99;

export const addOccupation = (person, occupation) => ({
  ...person,
  occupation,
});

export const calcRentalCarCost = ({ car, person, days }) => {
  // The daily rate of the car multiplied by the number of days
  return car.dailyRate * days;
};

export const isLegal2Drink = (person) => person.age >= 21;
