// Assignment code here


// Get references to the #generate element


// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
 // var passwordText = document.querySelector("#password");

 // passwordText.value = password;
//}

// Add event listener to generate button
var characters 


var criteria = function() {

  var characters = window.prompt("How many characters do you want? Please enter a number 1 - 10.");

  var numbers = window.prompt("How many numbers do you want? Please enter a number 1 - 10.");

  var specialcharacters = window.prompt("How many special characters do you want? Please enter a number 1 - 10.");

  if ((Number.isInteger(parseInt(characters))) === false || (Number.isInteger(parseInt(numbers))) === false || (Number.isInteger(parseInt(specialcharacters))) === false) {
  window.alert("At least one of the values you entered is not a number. Please try again.");
  criteria();
 }
  //else { writePassword() }
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", criteria);



