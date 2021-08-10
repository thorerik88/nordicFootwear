import displayMessage from "./displayMessage.js";
import createHtml from "./createHtml.js";

const container = document.querySelector(".search__results");
let shoesList = [];

export default function searchShoes(json, e) {
    shoesList = json;
    const messageContainer = document.querySelector(".message-container");
    const searchValue = e.target.value.trim().toLowerCase();

    const filteredShoes = json.filter(function(shoe) {
        if (shoe.title.toLowerCase().startsWith(searchValue)) {
            return true;
        }
    })
    shoesList = filteredShoes;

    if(shoesList.length === 0) {
        displayMessage("warning", "No shoes found", ".message-container");
        createHtml(shoesList, container);
    } else {
        messageContainer.innerHTML = "";
        createHtml(shoesList, container);
    }

    
}



