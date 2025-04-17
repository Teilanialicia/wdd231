// use ES modules
import {
    loadJsonData
} from "./functions.js";

loadJsonData("careers.json")
    .then(jsonData => {
        createCareerCards(jsonData);
    });

// ------------------------------------------------------------------------------------------------------------------------------------------------------

function createCareerCards(jsonData) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";

    // array method and dom interaction
    jsonData.forEach(career => {
        const card = document.createElement("div");

        // builds at least 15 items dynamically
        for (const [key, value] of Object.entries(career)) {
            
            const container = document.createElement("div");
            let description = document.createElement("p");
            let title = document.createElement("h4");
            
            if (key === "title") {
                title = document.createElement("h3");
                title.innerText = value;
            }
            else if (key === "source")
            {
                description = document.createElement("a");
                description.innerText = value;
                description.href = value;

                // template literal
                title.innerText = `${key.charAt(0).toUpperCase()}${key.slice(1,key.length)}`;
            }
            else {
                title.innerText = key.charAt(0).toUpperCase() + key.slice(1,key.length);
                description.innerText = value;
            }            
            container.className = "card-container";

            container.appendChild(title);
            container.appendChild(description);
            card.appendChild(container);
        }

        card.className = "card";
        gridContainer.appendChild(card);
    });
}