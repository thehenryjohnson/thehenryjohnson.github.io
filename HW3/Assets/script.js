var charLength = prompt("Please select character length:");
var specChar = confirm("Do you want special characters?");
var numChar = confirm("Do you want numeric characters?");
var lowerChar = confirm("Do you want lowercase letters?");
var upperChar = confirm("Do you want uppercase letters?");

var specArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "="];
var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var password = [];

if (charLength > 8 && charLength < 128) {
    if (specChar || numChar || lowerChar || upperChar) {
        makePassword(charLength, specChar, numChar, lowerChar, upperChar);
    } else {
        alert("You need at least one character type!");
    }
} else {
    alert("Password must be between 8 and 128 characters.")
}


function makePassword(charLength, specChar, numChar, lowerChar, upperChar) {

    if (specChar) {
        rando = Math.floor(Math.random() * specArray.length)
        console.log(specArray[rando])
    }
}
