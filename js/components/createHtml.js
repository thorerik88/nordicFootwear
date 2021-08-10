import { baseUrl } from "../settings/api.js";

export default function createHtml(json, container) {
    container.innerHTML = "";

    json.forEach(element => {
        container.innerHTML += `
        <div class="search__results__box">
            <img class="search__results__box__img" src="${baseUrl + element.image.url}" alt="">
            <p class="search__results__box__title">${element.title}</p>
            <p class="search__results__box__price">$${element.price}</p>
        </div>
        `;
    })
}