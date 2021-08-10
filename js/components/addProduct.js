import { baseUrl } from "../settings/api.js";
import { getToken } from "./localStorage.js";

export default async function addProduct(title, price, imageUrl, description, featured) {
    const data = JSON.stringify({ 
        title: title,
        price: price,
        image_url: imageUrl,
        description: description,
        featured: featured,
    });  
    console.log(data)
    apiCall(data)
}

async function apiCall(data) {
    const url = baseUrl + "/products";
    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json)
    }
    catch(error) {
        console.log(error)
    }
}