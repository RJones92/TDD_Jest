import calculator from "./calculator";

test("Calculator performing functions", () => {
  expect(calculator.sum(5, 3)).toBe(8);
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.divide(10, 5)).toBe(2);
  expect(calculator.multiply(5, 3)).toBe(15);
});
