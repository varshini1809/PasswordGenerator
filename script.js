const passwordBox = document.getElementById("password");
const length = 12;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "<>{}()*&^%$#@!.,/:;[]-=+";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    /* Math.floor(...): It rounds down a floating-point number to the nearest integer, ensuring a valid array index.

        Math.random(): It generates a random decimal between 0 and 1, used to create randomness.

        upperCase.length: It retrieves the number of elements in the upperCase array, 
                    determining the range of random indices for character selection. */

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

/*
navigator.clipboard.writeText(passwordBox.value) is a JavaScript code snippet that utilizes the Clipboard API. 
                Specifically, writeText is a method provided by the Clipboard API.
 
navigator.clipboard: This is an object that represents the clipboard in the browser.
writeText(passwordBox.value): This method is used to write text (in this case, the value of the "passwordBox" input element) to the clipboard. 
It takes the text you want to write as its argument.
*/