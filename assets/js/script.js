// This is to generate a random password between 8 and 128 characters

// const { arrayBuffer } = require("stream/consumers");

// Get references to the #generate element
// below are the variables for each parameter for the properties of the password
var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", "]", ":", ";", "<", ",", ">", ".", "?", "/"];

  // password variable is a placeholder for user generated amount of length
  var newPassword = "";
  console.log();
  
function generatePassword() {
  // prompt user to generate password
  window.alert("Generate your secure password here.  You must include a password that has the criteria selected.");

  // set password length
  var passwordLength = (prompt("How long will your password be? Must be at least 8 characters and at most 128 characters."));
  while (passwordLength <=7 || passwordLength >= 128) {
    var passwordLength = prompt("How long will your password be?  Password length must be between 8 and 128 characters.");
  };
  alert("Your password will have " + passwordLength + " characters.");
  console.log("Your password will have " + passwordLength + " characters.");

  // include lower case characters
  var lowerCase = (prompt("Would you like to include include lowercase characters? Enter Yes or No."));
  
  if (lowerCase === "Yes" || lowerCase === "yes" || lowerCase === "YES") {
    // don't want it to equal the input "Yes", you want to make it randomize between uppercase letters - you have the variable lowerCase, which is the input for this question
    // want to use random from lowercaseArray
    // newPassword += lowerCase; -- this is old input
    // the below adds the entire lowercaseArray from the top of this page - want to pick randomly from this array
    lowerCaseRandom = lowerCaseArray[Math.floor(Math.random()*lowerCase.length)];
    newPassword += lowerCaseRandom;
    console.log("Your password will include lower case characters.");
    console.log(lowerCaseArray);
  };

  // include upper case characters
  var upperCase = (prompt("Would you like to include include uppercase characters? Enter Yes or No."));
  
  if (upperCase === "Yes" || upperCase === "yes" || upperCase === "YES") {
    upperCaseRandom = upperCaseArray[Math.floor(Math.random()*upperCase.length)];
    newPassword += upperCaseRandom;
    console.log("Your password will include upper case characters.");
    console.log(upperCaseArray);
  };

  // include numeric characters
  var numericCase = (prompt("Would you like to include include numeric characters? Enter Yes or No."));
  
  if (numericCase === "Yes" || numericCase === "yes" || numericCase === "YES") {
    numericCaseRandom = numbArray[Math.floor(Math.random()*numericCase.length)];
    newPassword += numericCaseRandom;
    console.log("Your password will include numeric characters.");
    console.log(numbArray);
  };

  // include special characters
  var specialCharCase = (prompt("Would you like to include include special characters? Enter Yes or No."));
  
  if (specialCharCase === "Yes" || specialCharCase === "yes" || specialCharCase === "YES") {
    specialCharRandom = specialCharacterArray[Math.floor(Math.random()*specialCharCase.length)];
    newPassword += specialCharRandom;
    console.log("Your password will include special characters.");
    console.log(specialCharacterArray);
  };

  // for loop will go through above criteria X number of times and add to the generated password
  // adding the below causes the computer to work really hard - review this and figure out what's wrong
  // for (i = 0, i = newPassword.length; i++;) {
  //   newPassword += newPassword[Math.floor(Math.random() * newPassword.length)];
  // }

  password = newPassword[Math.floor(Math.random() * newPassword.length)];

  // console.log(password);

  // add password to display
  document.getElementById("password").value = newPassword;
  return newPassword;

};

// Write password to the #password input
function writePassword() {
console.log();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//write password function - below is from jpd61 - need to call generatePassword to write the password to the text box - refer to this
// function writePassword() {
//   var passwordText = document.querySelector("#password");
//   passwordText.value = " ";
//   var password = generatePassword();
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