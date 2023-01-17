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



/*
This function takes in an object that contains car, person, and days properties as its parameter and uses object destructuring to extract the values. It uses these values to calculate the total cost of renting the car by multiplying the car's daily rate with the number of days, adding the service fee, and adding the tax rate. If the person's age is under 25, it adds an additional $10 per day to the total cost and returns the final total cost.
*/

function calcRentalCarCost({ car, person, days }) {
  let totalCost = car.dailyRate * days;
  totalCost += car.serviceFee;
  totalCost += (totalCost * car.taxRate);
  if (person.age < 25) {
    totalCost += (days * 10);
  }
  return totalCost;
}

