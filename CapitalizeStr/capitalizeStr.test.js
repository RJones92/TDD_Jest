import capitalize from "./capitalizeStr";

test("Capatilize the first letter of a string.", () => {
  const string1 = "john";
  const capString1 = "John";
  const string2 = "charlotte";
  const capString2 = "Charlotte";
  expect(capitalize(string1)).toBe(capString1);
  expect(capitalize(string2)).toBe(capString2);
});
