// This is to generate a random password between 8 and 128 characters

// References to the #generate ID
var generateBtn = document.querySelector("#generate");

// Randomize output from the selected variables using a random math var
function randomMath(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var somethingRandom = Math.random()
  return Math.floor(min*(1-somethingRandom) + somethingRandom * max)
}

// Make a list from the randomized output
function randomizeItem(list) {
  return list[randomMath(list.length)]
}


function generatePassword() {
  // prompt user to generate password
  window.alert("Generate your secure password here.  You must include a password that has the criteria selected.");

  // set password length
  var passwordLength = (prompt("How long will your password be? Must be at least 8 characters and at most 128 characters."));
  // check if password is a valid number
  if (isNaN(passwordLength)) {
    window.alert('Please type a valid number.')
    return
  }
  while (passwordLength < 7 || passwordLength > 128) {
      // check if passowrd is the correct length
  if (passwordLength < 7 || passwordLength > 128) {
    window.alert('Please choose a number between 8 and 128.')
    generatePassword();
    return
  }
    var passwordLength = prompt("How long will your password be?  Password length must be between 8 and 128 characters.");
  };
  alert("Your password will have " + passwordLength + " characters.");
  console.log("Your password will have " + passwordLength + " characters.");
  parseInt(passwordLength);

// create a greater list of password attributes
  var inputSelection = []
  
// Variables for each parameter for the password
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", "]", ":", ";", "<", ",", ">", ".", "?", "/"];

// include lower case characters
  var lowerCase = window.confirm("Would you like to include include lowercase characters?")
  if (lowerCase === true) {
    inputSelection.push(lowerCaseArray)
    console.log("Your password will include lower case characters.");
    console.log(lowerCaseArray);
  }

  ;

  // include upper case characters
  var upperCase = window.confirm("Would you like to include include uppercase characters?")
  if (upperCase === true) {
    inputSelection.push(upperCaseArray)
    console.log("Your password will include lower case characters.");
    console.log(upperCaseArray);
  }

  ;

  // include numeric characters
  var numericCase = window.confirm("Would you like to include include numeric characters?")
  if (numericCase === true) {
    inputSelection.push(numbArray)
    console.log("Your password will include numeric characters.");
    console.log(numbArray);
  }

  ;

  // include special characters
  var specialCase = window.confirm("Would you like to include include special characters?")
  
  if (specialCase === true) {
    inputSelection.push(specialCharArray)
    console.log("Your password will include special characters.");
    console.log(specialCharArray);
  }

  ;

  // Generate the password after user answers prompts
  // The inputSelection variable contains a list of random characters 

  // var generatePassword = ""

  // for loop will go through above criteria X number of times and add to the generated password

  for (var i = 0; i < passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * passwordLength);
    password += inputSelection[randomNum];
    // var randomizedList = randomizeItem(inputSelection);
    // console.log("Your password will show " + randomizedList); - this function calls, so the for loop works to include all of the characters included
    // You want to randomly select characters from each list
    // generatePassword += randomizedList
    // console.log(randomizedList);
  }
  return password;

  // call the generatePassword function
  return newPassword;
  console.log("Your new password is " + generatePassword);
  // console.log("call the generatePassword function");
};
 
// password variable is a placeholder for user generated amount of length
var newPassword = "";
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // Display new password to the screen
  var passwordText = document.querySelector("#password");
  passwordText.value = " ";
  console.log(password);
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to copy password to clipboard - referenced tutorial on Youtube TechnicalCafe

// function copyPass() {

//   document.querySelector("textarea").select();
//   document.execCommand("Copy");
//   alert("Password copied to clipboard!");
// };