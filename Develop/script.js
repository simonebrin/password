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
    }else{
    alert("The next screens will ask you what types of characters you would like to be included in your password.");
    }
    return passwordLength;
}

//function for choosing upper case
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

//function for choosing numbers
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === "") {
    alert("Please answer Yes or No");
    determineNumbers();
  
  }else if (numberCheck === "yes" || numberCheck === "y"){
    numberCheck = true;
    return numberCheck;

  }else if (numberCheck === "no" || numberCheck === "n"){
    numberCheck = false;
    return numberCheck;

  }else {
    alert("Please answer Yes or No");
    determineNumbers();
  }
  return numberCheck;
}

setLength()
determineUppercase()
determineNumbers()