import displayMessage from "./components/common/displayMessage.js";
import { baseUrl } from "./settings/api.js";


const form = document.querySelector("form")
const username = document.querySelector(".form__username");
const password = document.querySelector(".form__password");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {{
       return displayMessage("warning", "Invalid values", ".message-container")
    }}

    login(usernameValue, passwordValue)
}

async function login(username, password) {
    const url = baseUrl + "/auth/local";

    const data = JSON.stringify({ identifier: username, password: password })
    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json)

        if (json.error) {
            displayMessage("warning", json.message[0].messages[0].message, ".message-container");
        } else {
            displayMessage ("success", "You are logged in", ".message-container");
            setTimeout(function() {
                document.location.href="/";
            }, 2000);
        }

    } catch(error) {
        console.log(error);

    }

};