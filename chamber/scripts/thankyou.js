import { openModal } from "./functions.js";

const getString = window.location.search;
console.log(getString);

const urlInfo = new URLSearchParams(getString);

const parentDiv = document.getElementById("submitted-info");
parentDiv.innerHTML = "";
console.log(urlInfo);
urlInfo.forEach((param, key) => {
    // the timestamp was being added, so I stopped it by doing this
    const newChild = document.createElement("p");
    newChild.innerText = `${key} : ${param}`;
    parentDiv.append(newChild);
})