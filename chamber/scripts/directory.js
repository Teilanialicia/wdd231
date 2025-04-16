import {
    loadJsonData,
    memberCards,
    addClickListener
} from "./functions.js";

loadJsonData("members.json")
    .then(json => {
        memberCards(json);
    })
    .then(() => {
        addClickListener();
    });