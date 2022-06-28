Math.floor(Math.random() * 10)

function getRandomNumber() {
  var value =  Math.floor(Math.random() * 10);
  return value;
}
console.log(getRandomNumber());
console.log[randomNumber];
var randomNumber = function() {
  var value = Math.floor(Math.random() * 10);
}
randomNumber();

Math.floor(Math.random() * 10);

var randomNumber = function() {
  var value = Math.floor(Math.random() * 11);

  return value;
}
randomNumber();
//passwordNumber = randomNumber;

var randomNumber = function() {
  var value = Math.floor(Math.random() * 11);

  return value;
}
passwordNumber = randomNumber;

var randomNumber = function() {
  var value = Math.floor(Math.random() * 21) + 40;

  return value;
}
randomNumber();


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(getRandomLower());
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//test;