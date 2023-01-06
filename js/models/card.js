import { Data } from "./data.js";
class Card extends Data {
  // CONSTRUCTOR
  constructor(type, number, expiryDate, image, category) {
    super(category);
    this.type = type;
    this.number = number;
    this.expiryDate = expiryDate;
    this.image = image;
  }

  // GET AND SET METHODS
  getType() {
    return this.type;
  }
  setType(type) {
    this.type = type;
  }
  getNumber() {
    return this.number;
  }
  setNumber() {
    this.number = number;
  }
  getExpiryDate() {
    return this.expiryDate;
  }
  setExpiryDate() {
    this.expiryDate = expiryDate;
  }
  getImage() {
    return this.image;
  }
  setImage(image) {
    this.image = image;
  }
}
export class BankCard extends Card {
  // CONSTRUCTOR
  constructor(type, name, pin, cardType, number, expiryDate, image, category) {
    super(cardType, number, expiryDate, image, category);
    this.type = type;
    this.name = name;
    this.pin = pin;
  }

  // GET AND SET METHODS
  getType() {
    return this.type;
  }
  setType(type) {
    this.type = type;
  }
  getName() {
    return this.name;
  }
  setName() {
    this.name = name;
  }
  getPin() {
    return this.pin;
  }
  setPin() {
    this.pin = pin;
  }

  // ADDITIONAL METHODS
  // TODO: implement
  toHTML() {
    const container = document.createElement("div");
    container.classList.add("card");

    const heading = document.createElement("h3");
    heading.innerText = this.website;
    container.appendChild(heading);

    const identifier = document.createElement("p");
    identifier.innerText = "Email: " + this.identifier;
    container.appendChild(identifier);

    const password = document.createElement("p");
    password.innerText = "Password: " + this.password;
    container.appendChild(password);

    return container;
  }
}

export class GiftCard extends Card {
  // CONSTRUCTOR
  constructor(shop, cardType, number, expiryDate, image, category) {
    super(cardType, number, expiryDate, image, category);
    this.shop = shop;
  }

  // GET AND SET METHODS
  getShop() {
    return this.shop;
  }
  setShop(shop) {
    this.shop = shop;
  }

  // ADDITIONAL METHODS
  // TODO: implement
  toHTML() {
    const container = document.createElement("div");
    container.classList.add("card");

    const heading = document.createElement("h3");
    heading.innerText = this.website;
    container.appendChild(heading);

    const identifier = document.createElement("p");
    identifier.innerText = "Email: " + this.identifier;
    container.appendChild(identifier);

    const password = document.createElement("p");
    password.innerText = "Password: " + this.password;
    container.appendChild(password);

    return container;
  }
}
