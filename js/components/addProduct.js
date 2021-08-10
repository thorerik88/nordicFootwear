import { baseUrl } from "../settings/api.js";
import { getToken } from "./localStorage.js";

export default async function addProduct(postType, id, title, price, imageUrl, description, featured) {
    const url = baseUrl + "/products";

    const addData = JSON.stringify({ 
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description,
        featured: featured  
    });

    const editData = JSON.stringify({
        id: id,
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description,
        featured: featured  
    });

    const token = getToken();

    let data;
    if (postType === "add") {
        data = addData;
    } else {
        data = editData;
    }

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