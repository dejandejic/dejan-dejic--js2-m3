import displayMessage from "./components/displayMessage";
import { baseURL } from "./settings/api.js";

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
event.preventDefault();

message.innerHTML ="";

const usernameValue = username.value.trim();
const passwordValue = password.value.trim();

if(usernameValue.length === 0 )
return displayMessage("message-error", "Wrong username or password", ".message-container");
}

doLogin(usernameValue, passwordValue);

async function doLogin(username, password) {

    const url = baseURL + "/admin/me";

    const data = JSON.stringify({ identifier: username, password: password});

    const options = {
        method: "POST",
        body: data,
    },
};

    try {
    const response = await fetch(url, options);
    const json = response.json();
} catch (error) {
    console.log(error);
}
