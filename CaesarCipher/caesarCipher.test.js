import caesar from "./caesarCipher";

test("Caesar Cipher", () => {
  const str1 = "Hello";
  const str2 = "go on then Jim";
  expect(caesar(str1, 2)).toBe("Jgnnq");
  expect(caesar(str1, 5)).toBe("Mjqqt");
  expect(caesar(str2, 13)).toBe("tb ba gura Wvz");
  expect(caesar(str2, 25)).toBe("fn nm sgdm Ihl");
});
