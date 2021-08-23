import apiCall from "../apiCalls/apiCall.js";

export default async function addProduct(title, price, imageUrl, description, featured) {
    const data = JSON.stringify({ 
        title: title,
        price: price,
        image_url: imageUrl,
        description: description,
        featured: featured,
    });  
    apiCall(data, "/products", "POST")
}

