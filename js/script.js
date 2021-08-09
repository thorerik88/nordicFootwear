import createNav from "./components/createNav.js";
import createFooter from "./components/createFooter.js";
import { clearStorage, getUsername, userKey } from "./components/localStorage.js";

const username = getUsername();
const { pathname } = document.location;

if (pathname === "/add.html" && username === undefined || pathname === "/delete.html" && username === undefined) {
    location.href = "/";
}

createNav();
createFooter();

// login nav button
const loginButton = document.querySelector(".nav__icons__profile");
const loginText = document.querySelector(".nav__icons__profile__message");
if (loginText.innerHTML === "Logout") {
    loginButton.addEventListener("click", function() {
        loginText.innerHTML = "Login";
        clearStorage(userKey);
        location.href = "/";
    })
} else {
    loginButton.addEventListener("click", function() {
        document.location.href="./login.html";
    })
} 


// cart nav button
const cartButton = document.querySelector(".nav__icons__shopping-cart");
cartButton.addEventListener("click", function() {
    document.location.href="./cart.html";
})

const footerLogin = document.querySelector(".footer-login");
footerLogin.addEventListener("click", function() {
    if (footerLogin.innerHTML === "LOGIN") {
        location.href = "/login.html";
    } else {
        clearStorage(userKey);
        location.href = "/";
    }
})

