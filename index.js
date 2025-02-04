// Remove the main element
document.querySelector('main#main').remove();

// Create new h1 element
const newHeader = document.createElement('h1');

// Set its id to 'victory'
newHeader.id = 'victory';

// Set its text content
newHeader.innerHTML = "Claude is the champion";

// Add it to the document
document.body.appendChild(newHeader);
// Remove the main element
const main = document.querySelector('main#main');
main.remove();

// Create new h1 element and assign it to newHeader
let newHeader = document.createElement('h1');

// Set its id
newHeader.id = 'victory';

// Set its text content (CHANGE "YOUR-NAME" TO YOUR ACTUAL NAME)
newHeader.innerHTML = "YOUR-NAME is the champion";

// Add it to the document
document.body.appendChild(newHeader);