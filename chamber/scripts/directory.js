import {
    getMemberInfo,
    memberCards,
    addClickListener
} from "./functions.js";

getMemberInfo()
    .then(json => {
        memberCards(json);
    })
    .then(() => {
        addClickListener();
    });