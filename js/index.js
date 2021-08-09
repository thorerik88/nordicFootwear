import { baseUrl } from "./settings/api.js";

const imageUrl = baseUrl + "/home";

// Fetch hero background image from api
(async function() {
    const hero = document.querySelector(".hero");

    try {
        const response = await fetch(imageUrl);
        const json = await response.json();

        // set hero background image
        const newUrl = baseUrl + json.hero_banner.url;
        hero.style.backgroundImage = "url('" + newUrl + "')";
        
    } 
    catch(error) {
        console.log(error);
    }
})();