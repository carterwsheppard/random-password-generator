// Assignment code here


// Get references to the #generate element


// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
//}

// Add event listener to generate button


var criteria = function() {

  window.alert("This password generator has the following requirements ~ Your password must have between 8 and 128 characters total.");

  characters = null;
  numbers = null;
  specialcharacters = null;  

  var characters = window.prompt("How many alphabetic characters do you want in your password? Please enter a number 0 - 128.");

  if (characters === null) {return}

  var numbers = window.prompt("How many numbers do you want in your password? Please enter a number 0 - 128.");

  //if (characters === null) {return}

  var specialcharacters = window.prompt("How many special characters do you want in your password? Please enter a number 0 - 128.");

  //if (characters === null) {return}

  if ((Number.isInteger(parseInt(characters))) === false || (Number.isInteger(parseInt(numbers))) === false || (Number.isInteger(parseInt(specialcharacters))) === false) {
  window.alert("At least one of the values you entered is not a number. Please try again.");
  criteria();
 }

 var passlength = parseInt(characters) + parseInt(numbers) + parseInt(specialcharacters);
 if ( 8 > passlength || passlength > 128) {
   window.prompt("Sorry - your selections did not meet the criteria for having 8 - 128 total characters. Please try again.");
   criteria();
 }


 var confirmLength = window.confirm("To confirm, you selected a total of " + passlength + " characters for your password. " + parseInt(characters) + " alphabetic characters will be used, " + parseInt(numbers) + " numeric characters will be used, and " + parseInt(specialcharacters) + " special characters will be used. Is this correct? If not, you can re-enter the number of each character type you'd like.");
 
 if (confirmLength === false) {criteria()};
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", criteria);



