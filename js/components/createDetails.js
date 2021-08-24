import { baseUrl } from "../settings/api.js";
import { saveProduct } from "./localStorage.js";
import updateCart from "./updateCart.js";
import createNav from "./createNav.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const container = document.querySelector(".details");

createDetails();

async function createDetails() {
    const url = baseUrl + "/products/" + id;
    let html = "";

    try {
        const response = await fetch(url);
        const results = await response.json();
        
        const title = results.title;
        const description = results.description;
        const imageUrl = results.image_url;
        const price = results.price;

        html = `
        <div class="details__box">
        <img class="details__box__img" src="${imageUrl}" alt="">
            <div class="details__box__wrapper">
                <h3 class="details__box__wrapper__title">${title}</h3>
                <p class="details__box__wrapper__description">${description}</p>
                <p class="details__box__wrapper__price">$${price}</p>
                <p class="details__box__wrapper__button shop-btn">Add to cart</p>
            </div>
        </div>
        `;
        container.innerHTML = html;

        // add to localStorage and change cart qty
        const cartButton = document.querySelector(".shop-btn");
        cartButton.addEventListener("click", () => {
            saveProduct(id);
            location.href = "/shoes.html";
        })

    }
    catch(error) {
        console.log(error);
    }

}

