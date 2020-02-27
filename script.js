// Assignment Code
console.log("startScript")
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
var passwordResult = "";
var numOfChars;
var lowerCase;
var upperCase;
var numbers;
var specialChars
var answers = {
  numbers: '',
  lower: '',
  upper: '' 
};

// create array for lowercase english characters 
var letters = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = letters.split("")
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArray = upper.split("")
var number = "1234567890"
var numberArray = number.split("")

//generate password
function generatePassword() {
  //get prompts from user prompts
  //length 8-128
  numOfChars = prompt("how many characters do you want");
  lowerCase = confirm("Would you like lower case letter?");
  upperCase = confirm("Would you like upper case letters?");
  numbers = confirm("Would you like numbers?")
  specialChars = confirm ("Would you like special characters");
  answers.numbers = numbers;
  answers.lower = lowerCase;
  answers.upper = upperCase;
  console.log(answers);

  if (answers.numbers === true && answers.lower === true && answers.upper === true){

  }
  return buildPassword()
}

function buildPassword() {
  console.log(numOfChars)

  //check for number 
  if (!isNaN(parseInt(numOfChars))
    && numOfChars >= 8
    && numOfChars <= 128) {
    //build password
    for (var i = 0; i < numOfChars; i++) {

      passwordResult = passwordResult +
        lowerCaseArray[parseInt(Math.random() * lowerCaseArray.length)]
    }
  }

  return passwordResult;
}
  function getRandomFromArray(arr) {
    return arr[parseInt(Math.random() * arr.length)]
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
console.log(generateBtn)
generateBtn.addEventListener("click", writePassword);
