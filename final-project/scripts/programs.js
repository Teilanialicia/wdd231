import {
    loadJsonData
} from "./functions.js";

loadJsonData("programs.json")
    .then(jsonData => {
        createProgramCards(jsonData);
    });

// ------------------------------------------------------------------------------------------------------------------------------------------------------

function createProgramCards(jsonData) {
    const gridContainer = document.querySelector(".flex-container");
    gridContainer.innerHTML = "";

    for (const [key, graduateDegree] of Object.entries(jsonData)) {
        const section = document.createElement("section");
        const graduateDegreeTitle = document.createElement("h2");

        section.className = "program-section";
        graduateDegreeTitle.innerText = graduateDegree.name;

        gridContainer.appendChild(graduateDegreeTitle);

        graduateDegree.programs.forEach(program => {
            const card = document.createElement("div");

            for (const [key, value] of Object.entries(program)) {
            
                const container = document.createElement("div");
                let description = document.createElement("p");
                let title = document.createElement("h4");
                
                if (key === "university") {
                    title = document.createElement("h3");
                    title.innerText = value;
                }
                else if (key === "website")
                {
                    description = document.createElement("a");
                    description.innerText = "Link";
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

            section.appendChild(card);
        });
        gridContainer.appendChild(section);
    }
}