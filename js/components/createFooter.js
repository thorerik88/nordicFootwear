import { getUsername } from "../components/localStorage.js";

// render footer
export default function createFooter() {
    const footerContainer = document.querySelector(".footer-container");

    const username = getUsername();

    // change login/logout html
    let loginStatus = `<li class="footer-wrapper__menu__item"><a href="/login.html" class="footer-login">LOGIN</a></li>`;
    if (username) {
        loginStatus = `<li class="footer-wrapper__menu__item"><a href="#" class="footer-login">LOGOUT</a></li>`
    }

    // change admin privilages
    let footerMenu = `
        <li class="footer-wrapper__menu__item"><a href="/index.html">HOME</a></li>
                <li class="footer-wrapper__menu__item"><a href="/shoes.html">SHOES</a></li>
                ${loginStatus}
        `;
    if (username) {
        footerMenu = `
            <li class="footer-wrapper__menu__item"><a href="/index.html">HOME</a></li>
                <li class="footer-wrapper__menu__item"><a href="/shoes.html">SHOES</a></li>
                <li class="footer-wrapper__menu__item"><a href="/add.html">ADD SHOES</a></li>
                <li class="footer-wrapper__menu__item"><a href="/edit.html">EDIT SHOES</a></li>
                ${loginStatus}
        `
    }

    footerContainer.innerHTML = `
    <div class="footer-wrapper">
            <div class="footer-wrapper__logo"></div>
            <ul class="footer-wrapper__menu">
                ${footerMenu}
            </ul>
            <ul class="footer-wrapper__social">
                <li class="footer-wrapper__social__item"><i class="fab fa-facebook"></i></li>
                <li class="footer-wrapper__social__item"><i class="fab fa-instagram"></i></li>
                <li class="footer-wrapper__social__item"><i class="fab fa-twitter"></i></li>
                <li class="footer-wrapper__social__item"><i class="fab fa-pinterest"></i></li>
            </ul>
        </div>
    `;
}