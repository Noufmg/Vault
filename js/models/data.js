export class Data {
  // CONSTRUCTOR
  constructor(category) {
    this.category = category;
  }

  // GET AND SET METHODS
  getCategory() {
    return this.category;
  }
  setCategory(category) {
    this.category = category;
  }
}

export class Note extends Data {
  // CONSTRUCTOR
  constructor(content, category) {
    super(category);
    this.content = content;
  }

  // GET AND SET METHODS
  getContent() {
    return this.content;
  }
  setContent(content) {
    this.content = content;
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
