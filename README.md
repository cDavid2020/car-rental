# People

Create a new file in `app` called `fleet.js`. This file will represent a fleet of cars. Create an **array literal** called `fleet` that contains 3 objects. Each object should represent a car and have the following properties:

- `make`
- `model`
- `year`
- `color`
- `dailyRate`

Export this array as a **default export (ESM)**.

---

Go back to `app/lib.js`. Add some variables in SCREAMING_SNAKE_CASE at the top of the file. These variables should represent the following:

- `TAX_RATE`
- `SERVICE_FEE`

Note that these will not be exported. They are just variables that we will use in our functions within `lib.js`.

Create a new function called `calcRentalCarCost`. This one will be another named export. It will take in three parameters (Hint: Clean Code! Use object destructuring!): `car`, `person`, `days`. It should return the total cost of renting the car for the number of days specified. The total cost should be calculated as follows:

- The daily rate of the car multiplied by the number of days
- Plus the service fee
- Plus the tax rate
- If the person's age is under 25, add an additional $10 per day. Hint: You could create a separate function for this. No need to export it. It would just be called by `calcRentalCarCost`.

Back in `app/index.js`, import the `calcRentalCarCost` function and invoke it with the first car in the `fleet` array, the `person` object, and a number of days. Log the result to the console.
