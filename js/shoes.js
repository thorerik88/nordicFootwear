import { baseUrl } from "./settings/api.js";
import createHtml from "./components/createHtml.js";
import displayMessage from "./components/displayMessage.js";
import searchShoes from "./components/searchShoes.js";

const shoes = baseUrl + "/products";

// render api results
(async function() {
    const container = document.querySelector(".search__results");
    const userInput = document.querySelector(".search__user-input__input");

    try {
        const response = await fetch(shoes);
        const json = await response.json();

        createHtml(json, container);
        
        if (json.length === 0) {
            console.log("empty")
            displayMessage("warning", "No shoes to display", ".message-container");
        } else {
            userInput.addEventListener("keyup", (e) => {
                searchShoes(json, e);
            })
        }

        // open details page and add id to url
        const imageContainer = document.querySelectorAll(".search__results__box");
        // const detailsUrl = location.href = "details.html";

        imageContainer.forEach(box => {
            box.addEventListener('click', (e)=>{
                let boxId = e.target.parentNode.id;
                let url = "/details.html?id=" + boxId;
                location.href = url;
            })
        })
    } 
    catch(error) {
        console.log(error);
    }
})();






