// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();
console.log(generatePassword());

// Answer prompts to create password
function generatePassword() {
  var length = prompt ("How long do you want your password to be? (Must be between 8 - 126 characters?)");
  console.log(length);
  var upCase = confirm ("Would you like uppercase letters to be included?");
  console.log(upCase);
  var lowCase = confirm ("Would you like lowercase letters to be included?");
  console.log(lowCase);
  var num = confirm ("Would you like numbers to be included?");
}
