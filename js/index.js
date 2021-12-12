import { baseURL } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js"


const productsUrl = baseURL + "products";

(async function() {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        container.innerHTML = "";


        json.forEach(function (product) {
            container.innerHTML += `
            <h4>${product.name}</h4>
            <p>Price: ${product.price}</p>
            `;
        });

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }

})();

