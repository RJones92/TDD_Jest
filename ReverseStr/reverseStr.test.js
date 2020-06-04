import reverseString from "./reverseStr";

test("Reverse a string", () => {
  const string1 = "abc";
  const revString1 = "cba";
  const string2 = "Hello";
  const revString2 = "olleH";
  expect(reverseString(string1)).toBe(revString1);
  expect(reverseString(string2)).toBe(revString2);
});
