// Import core
import App from './app.js';

// Import component
import cardContact from './component/cardContact.js';
import cardContent from './component/cardContent.js';

// Initialize app
const app = new App("root");

// Create parent element in app
app.createElement("header", "root", {id: "header", class: "text-center py-5 px-3"});
app.createElement("main", "root", {id: "main", class: "p-3 d-flex flex-column gap-3"});

// Create child in parent element
app.createElement("img", "header", {id: "avatar", class: "mb-3 rounded-circle"});
app.createElement("h5", "header", {id: "name", class: "text-info mb-0"});
app.createElement("a", "header", {id: "email", class: "text-decoration-none link-light"});
app.createElement("div", "header", {id: "contacts", class: "p-3 d-flex justify-content-center align-items-center gap-3"});

// Update header
app.updateHeader();

// Update UI
app.updateUI("./storage/contacts.json", "contacts", "beforeend", cardContact);
app.updateUI("./storage/contents.json", "main", "beforeend", cardContent);