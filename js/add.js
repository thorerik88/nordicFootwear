import displayMessage from "./components/displayMessage.js";
import addProduct from "./components/apiCalls/addProduct.js";
import { form, title, price, imageUrl, description, featured, message } from "./settings/formElements.js";

// add item

document.querySelector(".form__submit--add").style.display = "block";

form.addEventListener("submit", submitForm);

function submitForm(e) {
    message.innerHTML = "";
    e.preventDefault();

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const imageUrlValue = imageUrl.value.trim();
    const descriptionValue = description.value.trim();
    const featuredValue = featured.checked;
    
    // ADD: check if 'id' is used before validating
    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || imageUrlValue.length === 0 || descriptionValue.length === 0) {
        displayMessage("warning", "Please, add all values", ".message-container");
    } else {
        addProduct(titleValue, priceValue, imageUrlValue, descriptionValue, featuredValue);
        return
    }
}