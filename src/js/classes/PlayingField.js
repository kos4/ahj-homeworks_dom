export default class PlayingField {
  constructor(title, size) {
    this.size = size;
    this.title = title;
  }

  init() {
    this.drawFiled();
  }

  drawFiled() {
    const html = {
      container: document.querySelector(".game"),
      title: document.createElement("h1"),
      field: document.createElement("div"),
      cell: '<div class="game__playing-field-cell"></div>',
    };

    html.title.classList.add("game__title");
    html.title.innerHTML = this.title;
    html.container.appendChild(html.title);
    html.field.classList.add("game__playing-field");

    for (let i = 0; i < this.size; i++) {
      html.field.insertAdjacentHTML("beforeend", html.cell);
    }

    html.container.appendChild(html.field);
  }
}
