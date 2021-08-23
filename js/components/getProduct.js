import { baseUrl } from "../settings/api.js";
import { title, price, imageUrl, description, featured, delButton, addButton } from "../settings/formElements.js";
import displayMessage from "../components/displayMessage.js";

export default async function getProduct(id) {
    const apiUrl = baseUrl + "/products/" + id;
    try {
        const response = await fetch(apiUrl)
        const productDetails = await response.json();
        // display correct url
        let url;
        if(productDetails.image_url === null || productDetails.image_url === "") {
            url = baseUrl + productDetails.image.url;
        } else {
            url = productDetails.image_url;
        }
        
        if (productDetails.featured === true) {
            featured.checked = true;
        } else {
            featured.checked = false;
        }
        
        addButton.style.display = "block";
        delButton.style.display = "block";

        title.value = productDetails.title;
        price.value = productDetails.price;
        imageUrl.value = url;
        description.value = productDetails.description;
        console.log(title)
        title.disabled = false;
        price.disabled = false;
        imageUrl.disabled = false;
        description.disabled = false;
        featured.disabled = false;

        

    }
    catch(error) {
        if (error == "SyntaxError: Unexpected token N in JSON at position 0") {
            displayMessage("error", "ID not found, please try again", ".message-container");
        }
    }
};
