// Create arrays for each set of characters to be used when generating password
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// need to figure out how to add in single and double paranthese to special character list
var specialChar = ["!", "?", "@", "#", "^", "%", "&", ",", "*", "+", "-", ".", "/", "\", <", ">", "~"];

// Declare variables for future use
// use blank string for length variable, all others blank until later
var length = "";
var yespecial;
var yesNumber;
var yesLower;
var yesUpper;