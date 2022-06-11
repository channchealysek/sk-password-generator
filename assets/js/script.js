// Assignment code here
var number = "0123456789";
var symbol = "!@#$%&*_-+=|()[]:“‘>,.?/";
var upper_cases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower_cases = "abcdefghIjklmnpoqrstuvwxyz";
var rand;
var digit;
let password = "";
let user_conformation="";

var usr_selected_lower_cases = "";
var usr_selected_upper_cases = "";
var usr_selected_number = "";
var usr_selected_symbol = "";

//function password Generator
function generatePassword() {
  usr_selected_lower_cases = "no";
  usr_selected_upper_cases = "no";
  usr_selected_number = "no";
  usr_selected_symbol = "no";
  password = "";

  digit= prompt("Choose a length of at least 8 characters and no more than 128 characters for your password.\nif you don't choose any lengths for password.\nSystem will set default lenghts to 8 characters.");
  if(digit==="") digit = 8;
  
  //ask user to set character lenght for thier password
  //ask user to input any character that they want to include with the password.
  if (confirm("Do you want to chooses characters include to your password?\n If you don't, system will generate by DEFAULT.\n - Click OK - to start choose charaters.\n- Click Cancel - to default generate by system.")) {
    userCharactersSelected();
  }else{
    generatePasswordByDefault();
  }

  var result = password;
  return result;
}

// let user do select any characters that they want to be the password.
function userCharactersSelected() {
  if(confirm("Do you want include lower cases?")) usr_selected_lower_cases = "ok";
  if(confirm("Do you want include upper cases?")) usr_selected_upper_cases = "ok";
  if(confirm("Do you want include number?")) usr_selected_number = "ok";
  if(confirm("Do you want include symbol?")) usr_selected_symbol = "ok";
  
  // function for generate password with selected characters by user.
  generatePasswordWithUserSelected();
}

// generate password if user don't want to choose any things.
function generatePasswordByDefault(){
  for( let i=0; i<digit; i++) {
    rand = Math.floor(Math.random()*4);
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
    }
  }

  return password;
}

// do generate password by user selected charaters
function generatePasswordWithUserSelected(){
  for( let i=0; i<digit; i++) {
    rand = Math.floor(Math.random()*4);
    switch(rand) {
      case 0:
        if(usr_selected_number==="ok"){
          rand = Math.random()*(number.length);
          password += number.charAt(rand).toString();
          break;
        }
      case 1:
        if(usr_selected_symbol==="ok"){
          rand = Math.random()*(symbol.length);
          password += symbol.charAt(rand).toString();
          break;
        }
      case 2:
        if(usr_selected_upper_cases==="ok"){
          rand = Math.random()*(upper_cases.length);
          password += upper_cases.charAt(rand).toString();
          break;
        }
      case 3:
        if(usr_selected_lower_cases==="ok"){
          rand = Math.random()*(lower_cases.length);
          password += lower_cases.charAt(rand).toString();
          break;
        }
    }
  }

  // check if user don't choose any characters.
  if(password === ""){
    if(confirm("Yon did not chooses any characters.\n So,Do you want system generate your passowrd by default or you want to choose the characters again?\n - Click OK, choose charaters again.\n - Click Cancel, generate default by system.")){
      userCharactersSelected();
    }
    else{
      generatePasswordByDefault();
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
