import { baseUrl } from "../../settings/api.js";
import displayMessage from "../displayMessage.js";
import { getToken } from "../localStorage.js";

export default async function apiCall(data, extension, method) {
    const url = baseUrl + extension;
    const token = getToken();

    const options = {
        method: method,
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.published_at) {
            displayMessage("success", "Successful", ".message-container");
        }
    }
    catch(error) {
        console.log(error)
    }
}