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

  alert("Access Granted! Your new password is below. To generate a new password, click the 'Generate Password' button");

}

function generatePassword() {
  var passwordArr = [];
  var finalPass = "";
  var passLength = prompt("How long would you like your password to be?");
  // passwordArr.length = passLength;

  if (passLength >= 8 && passLength <= 128) {
    alert("OK, your password will be " + passLength + " characters.");
    console.log(passLength);
  }
  else {
    alert("Password must be between 8 and 128 characters!");
    return "";
  }

  var upCase = confirm("Would you like uppercase letters to be included?");
  if (upCase === true){
    //Reference passwordArr variable, assign it to itself with concatenated uppercase array characters
    passwordArr = alphaUp.concat(passwordArr);
    console.log(upCase);
    console.log("Character poll: " + passwordArr);

  }
  
  var lowCase = confirm("Would you like lowercase letters to be included?");
  if (lowCase === true) {
    passwordArr = alphaLow.concat(passwordArr);
    console.log(lowCase);
    console.log("Character poll: " + passwordArr);
  }

 var num = confirm("Would you like numbers to be included?"); 
 if (num === true) {
  passwordArr = numbers.concat(passwordArr);
   console.log(num);
   console.log("Character poll: " + passwordArr);
  }
  
  var special = confirm("Would you like special characters to be included?");
  if (special === true){
    passwordArr = specChars.concat(passwordArr);
    console.log(special); 
    console.log("Character poll: " + passwordArr);
  }

  if (passwordArr === 0) {

  }
  else{
    // Need a for loop and we need to assign password to itself with a Math.random, Math.floor selection of characters from the passwordArr with the length user selected in beginning
  for(i = 0; i < passLength; i++) {
    var randoPass = Math.floor(Math.random()*passwordArr.length);
    finalPass += passwordArr[randoPass];
    console.log(finalPass);

  }
  return finalPass;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);