import {
    loadJsonData,
    createDiscoverCards,
    getLastVisitText
} from "./functions.js";

loadJsonData("discover.json")
    .then(interests => {
        // Skip Algonquin Provincial Park since it’s already inlined
        const filtered = interests.filter(i => i.name !== "Algonquin Provincial Park");
        createDiscoverCards(filtered);
    });

const annoyingVisitModal = document.querySelector(".discover-modal");
const modalContent = document.querySelector(".last-visit");
modalContent.innerText = getLastVisitText();

annoyingVisitModal.showModal();

annoyingVisitModal.addEventListener("click", (event) => {
    if (event.target !== modalContent)
    {
        annoyingVisitModal.close();
    }
})