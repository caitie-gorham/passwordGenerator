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
// within the function, you need the following:
// prompt for password length and validation for prompt (needs to be between 8-128 characters)
// confirmation of use of special characters, lower case, upper case, and/or numbers with validation for at least one
// create string of characters for loop to choose from based on user input
// randomly generate string from available characters (can use for loop)

// write random string to password variable
// write password variable to box in HTML