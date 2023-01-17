// NAMED EXPORTS use curly braces
// We need the file extension, '.js', when importing a file
// unless we are using a bundler like Webpack or Vite.
import Heading from "./components/Heading.js";
import { addOccupation } from "./lib.js";

const persons = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 3,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    firstName: "Jack",
    lastName: "Doe",
    age: 35,
  },
];

const personWithOccupation = addOccupation(persons[0], "Student");

const headings = persons
  .map((person) =>
    // Call the Heading function component and pass in the person's first and last name
    Heading(person.firstName, person.lastName)
  )
  .join("");

console.log(headings);
