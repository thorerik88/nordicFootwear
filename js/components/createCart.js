import displayMessage from "./displayMessage.js";
import { deleteProduct, getFromStorage, idKey } from "./localStorage.js";

const existingCart = getFromStorage(idKey);
const messageContainer = document.querySelector(".message-container");
const container = document.querySelector(".cart");
let totalSum = 0;

(async function createCart() {

    let html = ""
    if (existingCart.length === 0) {
        displayMessage("warning", "Cart empty", ".message-container")
    } else {
        container.innerHTML = "";
        existingCart.forEach(item => {
            messageContainer.innerHTML = "";
            const id = item.id;
            const title = item.title;
            const price = item.price;
            const url = item.url;
            totalSum += price;

            html = `
            <div class="cart__item">
                <img class="cart__item__img" src="${url}" alt="">
                <div class="cart__item__text">
                    <h3 class="cart__item__text__title">${title}</h3>
                    <a href="/details.html?id=${id}" class="cart__item__text__details">Click to view details</a>
                </div>
                <div class="cart__item__price">
                    <p>$${price}</p>
                </div>
                <span class="cart__item__delete" id=${id}>X</span>
            </div>
            `;

            container.innerHTML += html;
        })
        container.innerHTML += 
        `<div class="cart__total">
            <h3>SUM</h3>
            <h3>$${totalSum}</h3>
        </div>`
    }

    const removeFromCart = document.querySelectorAll(".cart__item__delete");
    removeFromCart.forEach(button => {
        button.addEventListener("click", (e) => {
            deleteProduct(e.target.id)
            location.href= "/cart.html";
        })
    })
    
})();