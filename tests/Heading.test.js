import { expect, it } from "vitest";
import Heading from "../app/components/Heading";

it("creates HTML with an h1 and a welcome message", () => {
  // Arrange
  const inputFirstName = "Mark";
  const inputLastName = "Zuckerberg";

  const expected = "<h1>Welcome, Mark Zuckerberg</h1>";

  // Act
  const actual = Heading(inputFirstName, inputLastName);

  // Assert
  expect(actual).toContain(expected);
});
