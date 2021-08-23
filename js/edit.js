import displayMessage from "./components/displayMessage.js";
import getProduct from "./components/getProduct.js";
import apiCall from "./components/apiCalls/apiCall.js";
import { baseUrl } from "./settings/api.js";
import { idInput, form, title, price, imageUrl, description, featured, message, delButton, addButton } from "./settings/formElements.js";





form.addEventListener("submit", function(e) {
    e.preventDefault()
    const idValue = idInput.value;
    const titleValue = title.value;
    const priceValue = price.value;
    const imageUrlValue = imageUrl.value;
    const descriptionValue = description.value;
    const featuredValue = featured.checked;


    if (idValue.length === 0) {
        displayMessage("warning", "Please add an 'id' value", ".message-container");
    } else {
        message.innerHTML = "";
        if (e.submitter.value === "Get Product") {
            addButton.style.display = "none";
            delButton.style.display = "none";
            getProduct(idValue);
        } else if (e.submitter.value === "Submit"){
            updateProduct(idValue, titleValue, priceValue, imageUrlValue, descriptionValue, featuredValue);
        } else {
            deleteProduct(idValue);
        }
        

    }
})



async function updateProduct(id, title, price, imageUrl, description, featured) {4
    const apiUrl = baseUrl + "/products/" + id;
    
    const data = JSON.stringify({ title: title, price: price, image_url: imageUrl, description: description, featured: featured })
    console.log(data)
    apiCall(data, "/products/" + id, "PUT");
    addButton.style.display = "none";
}

async function deleteProduct(id) {
    const data = "";

    const delQuestion = confirm("Are you sure you want to delete the product");
    if (delQuestion) {
        apiCall(data, "/products/" + id, "DELETE");
    }    
}

