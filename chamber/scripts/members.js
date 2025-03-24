const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".member-grid");

// const url = "https://github.com/Teilanialicia/wdd231/blob/main/chamber/data/members.json";
const url = "http://localhost:5500/chamber/data/members.json"

const memberNames = getMemberInfo(url);

// -----------------------------------------------------------------------------------------------------------------------------

async function getMemberInfo(url){
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
  
        const json = await response.json();
        console.log(json);

        // Once the data has been retrieved, create the cards
        memberCards(json);

        gridbutton.addEventListener("click", () => {
            // example using arrow function
            display.classList.add("member-grid");
            display.classList.remove("list");

            const memberNames = document.getElementsByClassName(".member-name-show");

            memberNames.forEach(memberName => {
                memberName.className = "member-name-hide"
            })
        });
        
        listbutton.addEventListener("click", () => {
            display.classList.add("list");
            display.classList.remove("member-grid");

            const memberNames = document.getElementsByClassName(".member-name-hide");

            memberNames.forEach(memberName => {
                memberName.className = "member-name-show"
            });
        });

    } catch (error) {
        console.error(error.message);
    }
}

function memberCards(members) {

    // we need to set the innerHTML to "" to make sure it is empty every time we run the memberCards function, otherwise it will keep adding to what is already there.
    document.querySelector(".member-grid").innerHTML = ""
 
    members.forEach(member => {
        let card = document.createElement("div");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let logo = document.createElement("img");
        let name = document.createElement("p");
        
        card.className = "card"
        logo.src = member.image
        address.textContent = member.address 
        phone.textContent = member.phone
        website.href = member.website
        website.textContent = "Visit website"
        name.innerText = member.name;
        name.className = "member-name-hide"

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        document.querySelector(".member-grid").appendChild(card);   
    });
};

