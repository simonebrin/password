Math.floor(Math.random() * 10)

function getRandomNumber() {
  var value =  Math.floor(Math.random() * 10);
  return value;
}
console.log(getRandomNumber());

var randomNumber = function() {
  return value = Math.floor(Math.random() * 10);

}
console.log(randomNumber());


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
var letters = 'abcdefghijklmnopqrstuvwxyz'
var lowerLetters = letters.split('')
var upperLetters = letters.toUpperCase().split('')
var numbers = [0,1,2,3,4,5,6,7,8,9]
var symbols = ['!', '@', '#', '$', "%"]
var storedCriterias = []
console.log(storedCriterias)
// When the app starts the user should be to click a button
// ONce clicked they are given prompts to verify the credientials of their password
//Once we store that information, then we create a random password based on those criterias
//Where is the characters?

// Create an array to hold their choices
// ON true oof the character, then we push those characters into that array

function generatePassword() {
  var passwordLen = setLength()
  determineUppercase()
  determineNumbers()
  determineSymbols()
  determinelowercase()
  getRandomPassword(passwordLen)
}










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//test;

//function for choosing length
function setLength(){
  passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      setLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      setLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      setLength();
    }
    console.log(passwordLength)
    return passwordLength;
}

//function for choosing upper case
function determineUppercase(){
  uppercaseCheck = confirm("Do you want to include uppercase letters in your password? \n(Yes or No)");
  console.log(uppercaseCheck)
  // if the user's choice is true, then push uppercase array into the stored criteria array
  if (uppercaseCheck === true) {
    storedCriterias.push(upperLetters)
  }
  console.log(storedCriterias)
    return uppercaseCheck;
}

//function for choosing numbers
function determineNumbers(){
  numberCheck = confirm("Do you want to include numbers in your password? \n(Yes or No)");
  console.log(numberCheck)
  return numberCheck;
}

//function for choosing symbols
function determineSymbols(){
  determineSymbolsCheck = confirm("Do you want to include symbols in your password? \n(Yes or No)");
  console.log(determineSymbolsCheck)
  return determineSymbolsCheck;
}

//function for choosing lower case
function determinelowercase(){
  lowercaseCheck = confirm("Do you want to include lowercase letters in your password? \n(Yes or No)");
  console.log(lowercaseCheck)
    return lowercaseCheck;
}

function getRandomPassword(passwordLen) {
var finalPassword = ''
  for (let i = 0; i < passwordLen; i++) {

    finalPassword += storedCriterias[Math.floor(Math.random() * 10)]
    
  }
  return finalPassword

}