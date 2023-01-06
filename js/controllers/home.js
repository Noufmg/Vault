import { Account } from "../models/account.js";
import { BankCard, GiftCard } from "../models/card.js";
import { Note } from "../models/data.js";
const fs = require("fs");

// Keep track of which nav link is active
function updateActiveLink(target) {
  const active = document.getElementsByClassName("active").item(0);
  active.classList.remove("active");
  target.classList.add("active");
}

function categorize(item) {
  switch (item[0]) {
    case "note":
      notes.push(new Note(item));
      break;
    case "account":
      accounts.push(new Account(item[1], item[2], item[3], item[0]));
      break;
    case "bankcard":
      bankcards.push(new BankCard(item));
      break;
    case "giftCard":
      giftcards.push(new GiftCard(item));
      break;
    default:
      break;
  }
}

// Clears a container from its children
function clear(container) {
  const children = Array.from(container.childNodes);
  children.forEach((child) => {
    container.removeChild(child);
  });
}

function accountsPage(container) {
  clear(container);
}

function cardsPage(container) {
  clear(container);
}

function notesPage(container) {
  clear(container);
}

function settingsPage(container) {
  clear(container);
  container.innerHTML = fs.readFileSync("./components/settingsPage.html");
}

// MAIN //
const container = document.getElementById("container");

// TODO: Read data from files
var items = [
  ["account", "Google", "gmail.com", "********"],
  ["account", "Google", "gmail.com", "********"],
  ["account", "Google", "gmail.com", "********"],
  ["account", "Google", "gmail.com", "********"],
  ["account", "Google", "gmail.com", "********"],
];

// Add empty text if list is empty
if (items.length == 0) {
  const textNode = document.createTextNode("No data found.");
  container.appendChild(textNode);
}

// Filter data
var notes = [];
var accounts = [];
var bankcards = [];
var giftcards = [];
items.forEach((element) => {
  categorize(element);
});

// Display data
notes.forEach((element) => {
  if (element != null) {
    container.appendChild(element.toHTML());
  }
});
accounts.forEach((element) => {
  if (element != null) {
    container.appendChild(element.toHTML());
  }
});
bankcards.forEach((element) => {
  if (element != null) {
    container.appendChild(element.toHTML());
  }
});
giftcards.forEach((element) => {
  if (element != null) {
    container.appendChild(element.toHTML());
  }
});
// MAIN END //

// NAVIGATION //
const navButtonsIDs = [
  ["accountsButton", accountsPage],
  ["cardsButton", cardsPage],
  ["notesButton", notesPage],
  ["settingsButton", settingsPage],
];
navButtonsIDs.forEach((button) => {
  document.getElementById(button[0]).addEventListener("click", (event) => {
    button[1](container);
    updateActiveLink(event.target);
  });
});
// NAVIGATION END //

// SIGN OUT //
document.getElementById("signOutButton").addEventListener("click", () => {});
// SIGN OUT END //
