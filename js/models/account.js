import { Data } from "./data.js";

export class Account extends Data {
  // CONSTRUCTOR
  constructor(website, identifier, password, category) {
    super(category);
    this.website = website;
    this.identifier = identifier;
    this.password = password;
  }

  // GET AND SET METHODS
  getWebsite() {
    return this.website;
  }
  setWebsite(website) {
    this.website = website;
  }
  getIdentifier() {
    return this.identifier;
  }
  setIdentifier(identifier) {
    this.identifier = identifier;
  }
  getPassword() {
    return this.password;
  }
  setPassword(password) {
    this.password = password;
  }

  // ADDITIONAL METHODS
  toHTML() {
    const container = document.createElement("div");
    container.classList.add("card");

    const heading = document.createElement("h3");
    heading.innerText = this.website;
    container.appendChild(heading);

    const identifier = document.createElement("p");
    identifier.innerText = "Email/Username: " + this.identifier;
    container.appendChild(identifier);

    const password = document.createElement("p");
    password.innerText = "Password: " + this.password;
    container.appendChild(password);

    return container;
  }
}
