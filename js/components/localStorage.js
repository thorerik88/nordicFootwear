import updateCart from "./updateCart.js";

const tokenKey = "token";
const idKey = "id";
export const userKey = "user";

export function saveProduct(id, title, price, url) {
    saveProductToStorage(idKey, id, title, price, url );
}

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUsername() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
}

export function clearStorage(key) {
    localStorage.removeItem(key);
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return [];
    }

    return JSON.parse(value);
}

// save product details to localStorage
function saveProductToStorage(key, value, title, price, url) {
    let cartList = [];
    const newItem = {
        "id": value,
        "title": title,
        "price": price,
        "url": url
    };

    if (getFromStorage(key).length === 0) {
        cartList.push(newItem)
        saveToStorage(key, cartList);

    } else {
        const existingCart = getFromStorage(key);
        const filteredCart = existingCart.filter(function(item) {
            
            if (item.id === value) {
                return true;
            }
        })       
        
        if (filteredCart.length === 0) {
            cartList = existingCart;
            cartList.push(newItem);    
            saveToStorage(key, cartList)
        }
    }
}





