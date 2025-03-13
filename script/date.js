// creates a new variable to store the date object in 
const date = new Date();
// getting the year from the date object, using a "method"
let year = date.getFullYear();
let copyrightText = "©" + year + " Teilani Norton - Canada"
let yearString = "Last Update: " + year

// getting the element I want to change with the copyright year
document.getElementById("copyright").innerText = copyrightText

// getting the element I want to change with the date last modified 
document.getElementById("lastModified").innerText = document.lastModified
