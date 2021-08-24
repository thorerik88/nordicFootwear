import { getFromStorage, idKey } from "./localStorage.js";

export default function updateCart() {
    const qty = getFromStorage(idKey).length;
    return qty
}