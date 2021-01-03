// Create arrays for each set of characters to be used when generating password
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// need to figure out how to add in single and double paranthese to special character list
var specialChar = ["!", "?", "@", "#", "^", "%", "&", ",", "*", "+", "-", ".", "/", "\", <", ">", "~"];

// Declare variables for future use
// use blank string for length variable, all others completely blank until later
var length = "";
var yespecial;
var yesNumber;
var yesLower;
var yesUpper;

// create function for generatePassword
function generatePassword() {
    // set up variables first
    var passConcat = "";
    var passRandom = "";
    var yesSpecial = confirm("Click OK to include special characters");
    var yesNumber = confirm("Click OK to include numbers");
    var yesLower = confirm("Click OK to confirm lower case letters");
    var yesUpper = confirm("Click OK to confirm upper case letters");
    // need to add another while loop here to make sure at least one parameter is chosen
    
    var length = (prompt("Choose a password length between 8-128"));
    while(length < 8 || length > 128) {
        alert("Password length must be between 8-128 characters");
        var length = (prompt("Choose a password length between 8-128"));
        } 
   
    // create string with all parameters that are confirmed
    if (yesSpecial) {
        // add something to concat the special characters to the passConcat
    }

    if (yesNumber) {
        // add something to concat the numbers to the passConcat
    }

    if (yesLower) {
        // add something to concat the lower case letters to the passConcat
    }

    if (yesUpper) {
        // add something to concat the upper case letters to the passConcat
    }

    for (var i=0; i<length; i++) {
        passRandom = passRandom + passConcat[Math.floor(window.crypto.getRandomValues()*passConcat.length)];
    }

    return passRandom;

}
// within the function, you need the following:
//  create string of characters for loop to choose from based on user input
// randomly generate string from available characters (can use for loop)
// write random string to password variable
// write password variable to box in HTML