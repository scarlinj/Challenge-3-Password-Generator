// This is to generate a random password between 8 and 128 characters

// Get references to the #generate element
// below are the variables for each parameter for the properties of the password
var generateBtn = document.querySelector("#generate");
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", "]", ":", ";", "<", ",", ">", ".", "?", "/"];

function generatePassword() {
  // prompt user to generate password
  window.alert("Generate your secure password here.  You must include a password that has the criteria selected.");

  // set password length
  var passwordLength = (prompt("How long will your password be? Must be at least 8 characters and shorter than 128 characters."));
  while (passwordLength <= 7 || passwordLength >= 128) {
    var passwordLength = prompt("How long will your password be?  Password length must be between 8 and 128 characters.");
  };
  alert("Your password will have " + passwordLength + " characters.");
  // include lower case characters
  var lowerCase = (prompt("Would you like to include include lowercase characters? Enter Yes or No."));
  if (lowerCase === "Yes" || lowerCase === "yes" || lowerCase === "YES") {
    newPassword += lowerCase;
  };
  // include upper case characters
  var upperCase = (prompt("Would you like to include include uppercase characters? Enter Yes or No."));
  if (upperCase === "Yes" || upperCase === "yes" || upperCase === "YES") {
    newPassword += upperCase;
  };
  // include numeric characters
  var numericCase = (prompt("Would you like to include include numeric characters? Enter Yes or No."));
  if (numericCase === "Yes" || numericCase === "yes" || numericCase === "YES") {
    newPassword += numericCase;
  };
  // include special characters
  var specialCharCase = (prompt("Would you like to include include special characters? Enter Yes or No."));
  if (specialCharCase === "Yes" || specialCharCase === "yes" || specialCharCase === "YES") {
    newPassword += specialCharCase;
  };

  // password variable is a placeholder for user generated amount of length
  var newPassword = "";

  // for loop will go through above criteria X number of times and add to the generated password
  // for (i = 0, i = newPassword.length; i++) {
  //   newPassword += newPassword[Math.floor(Math.random() * newPassword.length)];
  // }
  // add password to display
  document.getElementById("password").value = newPassword;
  // return newPassword;

}

// Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// function to copy password to clipboard - referenced tutorial on Youtube TechnicalCafe

// function copyPass() {

//   document.querySelector("textarea").select();
//   document.execCommand("Copy");
//   alert("Password copied to clipboard!");
// }