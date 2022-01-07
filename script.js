// Assignment Code
let generateBtn = document.querySelector("#generate");
let lcletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let ucletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let spchars = ["!","@","#", "$", "%", "^", "&", "*", "(", ")"];
let allChars = [];

function generatePassword() {
  let pwLength = prompt("How long would you like your password to be? (8-128)");
  let password = [];
  if (pwLength < 8 || pwLength > 128) {
    alert ("you must choose between 8-128"); }
  
  let lcChars = prompt("Would you like to use any lower case letters in your password? (type yes/no)");
    if (lcChars === "yes") {
      
        password.push(lcletters[Math.floor(lcletters.length * Math.random())])
          pwLength--;
          allChars=allChars.concat(lcletters);
    } if (lcChars === "no") {
      alert("Moving on");
    }
  
  let allNumbers = prompt("Would you like to use numbers in password? (type yes/no)");
    if (allNumbers === "yes") {
        password.push(numbers[Math.floor(numbers.length * Math.random())])
        pwLength--;
        allChars=allChars.concat(numbers);
    }
      if (allNumbers === "no") {
        alert("moving on");
      }
    
  let ucChars = prompt("Would you like to use any uppercase letters in your password? (type yes/no)");
    if (ucChars === "yes") {
        password.push(ucletters[Math.floor(ucletters.length * Math.random())])
        pwLength--;
        allChars=allChars.concat(ucletters);
    }
    if (ucChars === "no") {
      alert("moving on");
    }
  let spChar = prompt("Would you like to use any special characters in your password (type yes/no)");
    if (spChar === "yes") {
      
        password.push(spchars[Math.floor(spchars.length * Math.random())])
        pwLength--;
        allChars=allChars.concat(spchars);
    }
    if (spChar === "no") {
      alert("Moving on");
    }
    for (let i = 0; i < pwLength; i++) {
      password.push(allChars[Math.floor(allChars.length * Math.random())])
    } 
  
      return password.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);