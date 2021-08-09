const form = document.querySelector(".form");

function validateInput(input) {
    const emailRegEx = /\S+@\S+\.\S+/;
    const regExMatch = regEx.test(input);
    return regExMatch
}