document.querySelector(".dropdown").addEventListener("click", () => {
    const dropdownContent = document.querySelector(".dropdown-content");
    if (window.getComputedStyle(dropdownContent).display === "flex")
        dropdownContent.style.display = "none";
    else
        dropdownContent.style.display = "flex";
});

document.addEventListener("click", function (event) {
    const dropdownContent = document.querySelector(".dropdown-content");
    const dropdownIcon = document.querySelector(".fa-bars");
    if (event.target !== dropdownIcon) {
        dropdownContent.style.display = "none";
    }
});

const dateNow = new Date(document.lastModified);
document.getElementById("last-modified").innerText = "Last Modified: " + (dateNow.getMonth()+1) + "/" + dateNow.getDate() + "/" + dateNow.getFullYear();

// also fetches JSON data from a file
// async function that uses a try block
export async function loadJsonData(filename) {
    const url = "./data/" + filename;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error.message);
    }
}


export async function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.showModal();
}

export async function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.close();
}