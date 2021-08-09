import { getUsername } from "../components/localStorage.js";

// render NAV menu
export default function createNav() {
    const { pathname } = document.location;

    const username = getUsername();

    // change login/logout based on status
    let loginStatus = `<span class="nav__icons__profile__message">Login</span>`;
    let mobileStatus = `<li><a href="/login.html">Login</a></li>`;

    if(username) {
        loginStatus = `<span class="nav__icons__profile__message">Logout</span>`;
        mobileStatus = `<li><a href="/login.html">Logout</a></li>`;
    }

    // change menu options based on status
    let desktopOptions = `
        <li class="nav__navmenu__wrapper__list__item"><a href="/index.html" class="${pathname === "/index.html" ? "active" : ""}">Home</a></li>
        <li class="nav__navmenu__wrapper__list__item"><a href="/shoes.html" class="${pathname === "/shoes.html" ? "active" : ""}">Shoes</a></li>
        `;
    if (username) {
        desktopOptions = `
        <li class="nav__navmenu__wrapper__list__item"><a href="/index.html" class="${pathname === "/index.html" ? "active" : ""}">Home</a></li>
        <li class="nav__navmenu__wrapper__list__item"><a href="/shoes.html" class="${pathname === "/shoes.html" ? "active" : ""}">Shoes</a></li>
        <li class="nav__navmenu__wrapper__list__item"><a href="/add.html" class="${pathname === "/add.html" ? "active" : ""}">Add/Edit Shoes</a></li>
        <li class="nav__navmenu__wrapper__list__item"><a href="/delete.html" class="${pathname === "/delete.html" ? "active" : ""}">Delete Shoes</a></li>
        `
    }
    
    

    const navContainer = document.querySelector(".nav");

    navContainer.innerHTML = `
    <div class="nav__logo"></div>
    <div class="nav__navmenu">
        <div class="nav__navmenu__wrapper">
            <ul class="nav__navmenu__wrapper__list">
                ${desktopOptions}
            </ul>
            <div class="dropdown">
                <ul class="dropdown__list">
                    <li><i class="fa fa-times"></i></li>
                    <li><a href="/" class="${pathname === "/" ? "active" : ""}">Home</a></li>
                    <li><a href="/shoes.html" class="${pathname === "/shoes.html" ? "active" : ""}">Shoes</a></li>
                    <li><a href="/add.html" class="${pathname === "/add.html" ? "active" : ""}">Add/Edit Shoes</a></li>
                    <li><a href="/delete.html" class="${pathname === "/delete.html" ? "active" : ""}">Delete Shoes</a></li>
                    ${mobileStatus}
                </ul>
            </div>
        </div>
        <i class="fa fa-bars"></i>
    </div>
    <div class="nav__icons">
        <div class="fa fa-shopping-cart nav__icons__shopping-cart">
            <span class="nav__icons__shopping-cart__cart-quantity">1</span>
        </div>
        <div class="nav__icons__profile">
            <span class="fa fa-user nav__icons__profile__icon"></span>
            ${loginStatus}
        </div>
    </div>
    `;
}