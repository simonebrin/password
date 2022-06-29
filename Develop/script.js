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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//test;

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
    }else{
    alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return passwordLength;
}

setLength()