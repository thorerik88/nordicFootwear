import displayMessage from "./components/displayMessage.js";
import addProduct from "./components/addProduct.js";

// add item

const form = document.querySelector(".form");
const id = document.querySelector(".form__id");
const title = document.querySelector(".form__title");
const price = document.querySelector(".form__price");
const imageUrl = document.querySelector(".form__image-url");
const description = document.querySelector(".form__description");
const featured = document.querySelector("input[type='checkbox']");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    message.innerHTML = "";
    e.preventDefault();

    const idValue = id.value.trim();
    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const imageUrlValue = imageUrl.value.trim();
    const descriptionValue = description.value.trim();
    const featuredValue = featured.checked;
    
    // ADD: check if 'id' is used before validating
    if(id.value.length > 0 && e.submitter.value === "Add") {
        displayMessage("warning", "Don't use 'id' when adding products", ".message-container");
    } else if(e.submitter.value === "Add"){
        if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || imageUrlValue.length === 0 || descriptionValue.length === 0) {
            displayMessage("warning", "Please, add all values", ".message-container");
        } else {
            addProduct("add", titleValue, priceValue, imageUrlValue, descriptionValue, featuredValue);
            return
        }
    }

    // EDIT: validate all fields
    if(e.submitter.value === "Edit") {
        if(idValue.length === 0 || isNaN(idValue) || titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || imageUrlValue.length === 0 || descriptionValue.length === 0) {
            displayMessage("warning", "Please, add all values", ".message-container");
        } else {
            addProduct("edit", idValue, titleValue, priceValue, imageUrlValue, descriptionValue, featuredValue);
        }
    }
}