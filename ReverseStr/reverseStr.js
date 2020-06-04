function reverseString(str) {
  let revString = "";
  const strArray = str.split("");
  for (let i = str.length - 1; i >= 0; i--) {
    revString += strArray[i];
  }
  return revString;
}

export default reverseString;
