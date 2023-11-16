// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// adding for loop to pull random characters based on user input, created variable passwordLength for user input and storing in userPWlength
function generatePassword() {
  // find a way to store user input from prompt
  var passwordLength = prompt("How many characters do you need?");
  var passwordCharacters = "";
  // stop additional prompts if more than 128 characters or less than 8 characters is requested by user
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Password length must be between 8 to 128 characters.");
    return;
  }
  // included passwordCharacters in separate strings in generatePassword function, should generate random string based on user confirmation
  if (confirm("Click OK to include uppercase letters.")) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (confirm("Click OK to include lowercase letters.")) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (confirm("Click OK to include numbers.")) {
    passwordCharacters += "0123456789";
  }
    
  if (confirm("Click OK to include special characters.")) {
    passwordCharacters += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  // add check for undefined output
  if (!passwordCharacters) {
    alert("Please select at least one character type. Password length must be between 8 to 128 characters.")
    return;
  }
  
  // randomize passwordCharacters based on user prompt choices
  var password = '';
  for (var i = 0; i < passwordLength; i++){
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  };
  
  return password;
  console.log(password); // console log for testing
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

