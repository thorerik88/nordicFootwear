import { getFromStorage } from "./localStorage.js";

export default function updateCart() {
    const qty = getFromStorage("id").length;
    return qty
}