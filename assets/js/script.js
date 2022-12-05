// This is to generate a random password between 8 and 128 characters

// References to the #generate ID
var generateBtn = document.querySelector("#generate");

// Randomize output from the selected variables
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

  // password variable is a placeholder for user generated amount of length
  var newPassword = "";
  
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

  var generatePassword = ""

  // for loop will go through above criteria X number of times and add to the generated password

  for (var i = 0; i < passwordLength; i++) {
    var randomizedList = randomizeItem(inputSelection)
    generatePassword += randomizeItem
  }

  return generatePassword
}
  // adding the below causes the computer to work really hard - still have same issue 10-19.  review this and figure out what's wrong
  // for (i = 0, i = newPassword.length; i++;) {
  //   newPassword += newPassword[Math.floor(Math.random() * newPassword.length)];
  // }
  // try using for loops or while loops to iterate through password prompts multiple times, randomly
  // repeat and execute until password reaches randomly-generated length

  // for(var i = 0; i < newPassword.length; i++) {
    // "apple" appears the right number of times in the console - this means that the for loop worked 4 times: one for each set of variables
    // the "i" value appears the same number of times that you input for passwordLength prompt when tested on console.log - the for loop works
    // still only get one value per question for a total length of 4, even though you input a number higher than 4
    // the loop iterates the same number of times as the password length, but returns NaN values after the first 4 
    // how to call back the loop above?
    // generatePassword(); - this does not work - this will return the prompts again in a loop
    // see 3.2.5 of lesson - review for loops
    // 3.5.5 - review recursion
    // break;
    // console.log('iteration is #',{i});
    // console.log(newPassword[i]);
    // var randomChar = randomizeItem(randomPassword)
    // console.log(newPassword);
    // the below shows each value in the index for newPassword, but still only get 4 characters (5-9 are listed as "NaN" - not a number, which makes sense for letter variables)
  //   console.log(newPassword[i] + i + " index");
  // }
  // console.log(newPassword);

  // password = newPassword[Math.floor(Math.random() * passwordLength)];

  // add password to display
  // document.getElementById('#password').value = newPassword;
  // return newPassword;

// };

// Write password to the #password input
function writePassword() {
console.log(password);
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

//   passwordText.value = password;
//   console.log(passwordText);
//   return passwordText;
// }
//write password function - below is from jpd61 - need to call generatePassword to write the password to the text box - refer to this
// function writePassword() {
//   var passwordText = document.querySelector("#password");
//   passwordText.value = " ";
//   var password = generatePassword();
//   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// function to copy password to clipboard - referenced tutorial on Youtube TechnicalCafe

// function copyPass() {

//   document.querySelector("textarea").select();
//   document.execCommand("Copy");
//   alert("Password copied to clipboard!");
// };