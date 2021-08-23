import { baseUrl } from "../settings/api.js";


export default async function createFeatured() {
    const container = document.querySelector(".featured__wrapper");
    const url = baseUrl;

    try {
        
        const response = await fetch(url + "/products");
        const json = await response.json();
        
        let html = "";

        json.forEach(item => {
            let source = "";

            if (item.image === null) {
                source = item.image_url;
            } else {
                source = baseUrl + item.image.url;
            }

            if (item.featured === true) {
                let title = item.title
                html += `
                <div class="featured__wrapper__item">
                    <img class="featured__wrapper__item__img" src="${source}" alt="">
                    <p>${title}</p>
                </div>`;
            }
            
            
            if (html.length === 0) {
                html = `<p>No featured products to be shown at the moment</p>`;    
            }
            container.innerHTML = html;
        })
    }
    catch(error) {
        console.log(error)
    }
}



