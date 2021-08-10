import { baseUrl } from "../settings/api.js";

export default function createHtml(json, container) {
    container.innerHTML = "";
    json.forEach(element => {
        
        // check type of image url
        let imageUrl;
        if (element.image_url === null || element.image_url === "") {
            imageUrl = baseUrl + element.image.url;
        } else {
            imageUrl = element.image_url;
        }

        container.innerHTML += `
        <div class="search__results__box">
            <img class="search__results__box__img" src="${imageUrl}" alt="">
            <p class="search__results__box__title">${element.title}</p>
            <p class="search__results__box__price">$${element.price}</p>
        </div>
        `;
    })
}