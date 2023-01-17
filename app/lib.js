// screaming snake case - an example of how you can define the variables in SCREAMING_SNAKE_CASE at the top of the file:

TAX_RATE = 0.08
SERVICE_FEE = 24.99

// Note that these variables will not be exported and can only be used within the same file they are defined in.

export const addOccupation = (person, occupation) => ({
  ...person,
  occupation,
});

export const calcRentalCarCost = ({ car, person, days }) => {
  // The daily rate of the car multiplied by the number of days
  return car.dailyRate * days;
};

export const isLegal2Drink = (person) => person.age >= 21;


