import calculate from "../src/logic/calculate";
import operate from "../src/logic/operate";

test("handles AC button", () => {
  const obj = {
    total: "10",
    next: "5",
    operation: "+",
  };

  const result = calculate(obj, "AC");

  expect(result).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});

test("handles number buttons", () => {
  const obj = {
    total: "10",
    next: "5",
    operation: "+",
  };

  // Example for number button '2'
  const result = calculate(obj, "2");

  expect(result).toEqual({
    total: "10",
    next: "52",
    operation: "+",
  });

  // Example for number button '0' when next is '0'
  const result2 = calculate({ ...obj, next: "0" }, "0");

  expect(result2).toEqual({});
});

// Add more test cases for other buttons...

// Example for '=' button
test("handles = button", () => {
  const obj = {
    total: "10",
    next: "5",
    operation: "+",
  };

  const result = calculate(obj, "=");

  expect(result).toEqual({
    total: "15",
    next: null,
    operation: null,
  });
});
