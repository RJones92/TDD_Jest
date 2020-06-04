function caesarCipher(str, x) {
  let cipherResult = "";

  // shift each character along the unicode table by x
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let newCharCode = "";

    //need to handle UTF characters that aren't in the alphabets
    if (charCode === 32) {
      //Space character should still be a space
      newCharCode = charCode;
    } else if (
      charCode < 65 ||
      (charCode > 90 && charCode < 97) ||
      charCode > 122
    ) {
      throw new Error(
        "Characters aren't in the alphabet, so can't be applied to the Caesar Cipher"
      );
    } else {
      newCharCode = charCode + x;
      //newCharCode will need to change if it goes outside of the UTF-8 alpahbet
      //65-90 = A-Z
      //97-122 = a-z
      if (charCode > 64 && charCode <= 90 && newCharCode > 90) {
        //Capital letters going outside the alphabet
        newCharCode = 64 + (x - (90 - charCode));
      } else if (charCode > 96 && charCode <= 122 && newCharCode > 122) {
        //Lowercase letters going outside the alphabet
        newCharCode = 96 + (x - (122 - charCode));
      }
    }

    //Convert number to a string now
    cipherResult += String.fromCharCode(newCharCode);
  }
  return cipherResult;
}

export default caesarCipher;
