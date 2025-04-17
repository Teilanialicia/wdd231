import {
    openModal
} from "./functions.js";

const getString = window.location.search;
const urlInfo = new URLSearchParams(getString);
const parentDiv = document.getElementById("submitted-info");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const modalMessage = document.getElementById("modal-message");

// use a modal
openModal("modal");

parentDiv.innerHTML = "";
modalMessage.innerText = getVisitString();

urlInfo.forEach((param, key) => {
    const newChild = document.createElement("p");
    newChild.innerText = `${key} : ${param}`;
    parentDiv.append(newChild);
});

// DOM interaction by adding a click event
modal.addEventListener("click", (event) => {
    if (event.target !== modalContent)
    {
        modal.close();
    }
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

function getVisitString() {
    const hasVisitedCacheKey = "hasVisited";
    // use localStorage to store the number of times a user has submitted the form
    const hasVisited = localStorage.getItem(hasVisitedCacheKey);
    let returnString = "";

    if (!hasVisited) {
        returnString = "Thanks for submitting a message!";
    }
    else {
        returnString = `Thanks for submitting another message! That makes ${hasVisited} messages sent by you!`
    }
    localStorage.setItem(hasVisitedCacheKey, (Number(hasVisited)+1));
    return returnString;
}