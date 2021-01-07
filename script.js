// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphaLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphaUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specChars = ["!","@","#","$","%","*"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

function generatePassword() {
  var passwordArr = []
  var length = prompt("How long would you like your password to be?");
  if (length >= 8 && length <= 128) {
    alert("OK, your password will be " + length + " characters.");
    console.log(length);
  }
  else {
    alert("Password must be between 8 and 128 characters!");

  }

  var upCase = confirm("Would you like uppercase letters to be included?");
  if (upCase === true){
    //Reference passwordArr variable, assign it to itself with concatenated uppercase array characters
    alphaUp.concat(passwordArr);
    console.log(upCase);
    console.log(passwordArr);

  }
  
  var lowCase = confirm("Would you like lowercase letters to be included?");
  if (lowCase === true) {
    alphaLow.concat(passwordArr);
    console.log(lowCase);
  }
 var num = confirm("Would you like numbers to be included?"); 
 if (num === true) {
  numbers.concat(passwordArr);
   console.log(num);

  }
  
  var special = confirm("Would you like special characters to be included?");
  if (special === true){
    specChars.concat(passwordArr);
    console.log(special);

  }
// Need a for loop and we need to assign password to itself with a Math.random, Math.floor selection of characters from the passwordArr with the length user selected in beginning
  // for (i=0, i< length, i++) {
  //   Math.floor(Math.random)
  // }
  // writePassword(passwordArr);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);