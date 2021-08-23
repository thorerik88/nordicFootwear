import createNav from "./components/createNav.js";
import createFooter from "./components/createFooter.js";
import { clearStorage, getUsername, userKey } from "./components/localStorage.js";
import createFeatured from "./components/createFeatured.js";

const username = getUsername();
const { pathname } = document.location;

if (pathname === "/add.html" && username === undefined || pathname === "/delete.html" && username === undefined) {
    location.href = "/";
}

createNav();
createFooter();
createFeatured();

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

// mobile dropdown menu

const mobileOpen = document.querySelector(".fa-bars");
const mobileClose = document.querySelector(".fa-times");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".dropdown");

mobileOpen.addEventListener("click", function() {
    if (overlay.style.display !== "block") {
        overlay.style.display = "block";
        mobileMenu.style.display = "block";
    }
})

mobileClose.addEventListener("click", function() {
    if (overlay.style.display === "block") {
        overlay.style.display = "none";
        mobileMenu.style.display = "none";
    }
})

window.onclick = function(event) {
    if (event.target === overlay) {
        overlay.style.display = "none";
        mobileMenu.style.display = "none";
    }
}

