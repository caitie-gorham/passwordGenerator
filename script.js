var generateBtn = document.querySelector("#generate");

// Create arrays for each set of characters to be used when generating password
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "?", "@", "#", "^", "%", "&", ",", "*", "+", "-", ".", "/", "\", <", ">", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// need to figure out how to add in single and double paranthese to special character list

// Declare variables for future use
var length = "";
var yesLower;
var yesUpper;
var yespecial;
var yesNumber;

// create function for generatePassword
function generatePassword() {
    
    var length = (prompt("Choose a password length between 8-128"));
    while(length < 8 || length > 128) {
        alert("Password length must be between 8-128 characters");
        var length = (prompt("Choose a password length between 8-128"));
        } 

    var yesLower = confirm("Click OK to confirm lower case letters");
    var yesUpper = confirm("Click OK to confirm upper case letters");
    var yesSpecial = confirm("Click OK to include special characters");
    var yesNumber = confirm("Click OK to include numbers");
    
    while(yesLower === false && yesUpper == false && yesSpecial == false && yesNumber == false) {
        alert("You must click OK for at least one of the input parameters");
        var yesLower = confirm("Click OK to confirm lower case letters");
        var yesUpper = confirm("Click OK to confirm upper case letters");
        var yesSpecial = confirm("Click OK to include special characters");
        var yesNumber = confirm("Click OK to include numbers");
    }

    var passConcat = [];
    if (yesLower) {
        passConcat = passConcat.concat(lower);
    }

    if (yesUpper) {
        passConcat = passConcat.concat(upper);
    }

    if (yesSpecial) {
        passConcat = passConcat.concat(special);
    }

    if (yesNumber) {
        passConcat = passConcat.concat(number);
    }

    var passRandom = "";
   
    for (var i=0; i<length; i++) {
        passRandom = passRandom + passConcat[Math.floor(Math.random()*passConcat.length)];
        console.log(passRandom);
    }
    return passRandom;
}

// create function to create writePassword variable and write it to box on page (#password)
function writePassword () {
    var password = generatePassword();
    var passwordString = document.querySelector("#password");
    passwordString.value = password;
}

generateBtn.addEventListener("click", writePassword);