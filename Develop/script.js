// Assignment code here
var number = "0123456789";
var symbol = "!@#$%&*_-+=|()[]:“‘>,.?/";
var upper_cases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower_cases = "abcdefghIjklmnpoqrstuvwxyz";
var user_char;
var rand;

//function password Generator
function generatePassword() {

  var digit= prompt("Choose a length of at least 8 characters and no more than 128 characters for your password.\nif you don't choose any lengths for password.\nSystem will set default lenghts to 12 characters.");
  if(digit==="") digit = 12;

  var user_char = prompt("Enter character that you want to include in the password.\adon't enter any characters.\nSystem will generate by DEFAULT.");

  let password = "";

  for( let i=0; i<digit; i++) {
    
    if (user_char === ""){
      rand = Math.floor(Math.random()*4);
    }else{
      rand = Math.floor(Math.random()*5);

    } 
    switch(rand) {
      case 0:
        rand = Math.random()*(number.length);
        password += number.charAt(rand).toString();
        break;
      case 1:
        rand = Math.random()*(symbol.length);
        password += symbol.charAt(rand).toString();
        break;
      case 2:
        rand = Math.random()*(upper_cases.length);
        password += upper_cases.charAt(rand).toString();
        break;
      case 3:
        rand = Math.random()*(lower_cases.length);
        password += lower_cases.charAt(rand).toString();
        break;
      case 4:
        rand = Math.random()*(user_char.length);
        password += user_char.charAt(rand).toString();
        break;

      default:
          password = "Password DON'T Generated! Thank You!";
    }
  }
  return password;
}

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
