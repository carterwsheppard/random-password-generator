// Assignment code here


// Get references to the #generate element


// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
//}

// Add event listener to generate button
var passwordLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var passwordUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var passwordNumbers = [1,2,3,4,5,6,7,8,9,0];
var passwordSpecialCharacters = ["!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

var reset = function() {
   characters = null;
  numbers = null;
  specialcharacters = null;
}

var criteria = function() {

  window.alert("This password generator has the following requirements ~ Your password must have between 8 and 128 characters total. ~ Your overall length will be the sum of how many alphabetic, numberic. and special characters you have. ~ You may not include more upper case letters than total alphabetical characters. ~ You are not requireed to have all of lowercase, uppercase, numeric, and special character types. To not include a certain type, simply enter 0 for that selection criteria.");

  reset();

  var characters = window.prompt("How many alphabetic characters do you want in your password? Please enter a number 0 - 128.");

  if (characters === null) {return}

  var numbers = window.prompt("How many numbers do you want in your password? Please enter a number 0 - 128.");

  //if (characters === null) {return}

  var specialcharacters = window.prompt("How many special characters do you want in your password? Please enter a number 0 - 128.");

  //if (characters === null) {return}

  var checkuppercase = window.prompt("By default, this password generator will yield only lower case alphabetical characters. If you would like to include some upper case values, please enter the number of upper case characters you would like. Otherwise, press cancel. Note that the max upper case characters you choose must be less that or equal to the " + parseInt(characters) + " total alphabetical characters you chose originally.")

  if ((Number.isInteger(parseInt(characters))) === false || (Number.isInteger(parseInt(checkuppercase))) === false || (Number.isInteger(parseInt(numbers))) === false || (Number.isInteger(parseInt(specialcharacters))) === false) {
  window.alert("At least one of the values you entered is not a number. Please try again.");
  reset();
  criteria();
 }

 if (parseInt(checkuppercase) > parseInt(characters)) {
   window.alert("You cannot choose to have more upper case characters than total alphabetical characters. Please try again.");
  reset();
  criteria();
 }

 var passlength = parseInt(characters) + parseInt(numbers) + parseInt(specialcharacters);

 if ( 8 > passlength || passlength > 128) {
   window.alert("Sorry - your selections did not meet the criteria for having 8 - 128 total characters. Please try again.");
   reset();
   criteria();
 }

 var confirmLength = window.confirm("To confirm, you selected a total of " + passlength + " characters for your password. " + parseInt(characters) + " alphabetic characters will be used (with " + parseInt(checkuppercase) + " upper case letters)," + parseInt(numbers) + " numeric characters will be used, and " + parseInt(specialcharacters) + " special characters will be used. Is this correct? If not, you can re-enter the number of each character type you'd like.");
 
 if (confirmLength === false) {
   reset();
   criteria();
  };

}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", criteria);

 
 
 console.log(characters);
 console.log(numbers);
 console.log(specialcharacters);
 console.log(checkuppercase);



