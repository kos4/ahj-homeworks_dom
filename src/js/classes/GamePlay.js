export default class GamePlay {
  constructor(size) {
    this.size = size;
  }

  init() {
    setInterval(this.setPosition.bind(this), 2000);
  }

  setPosition() {
    const html = {
      element: document.createElement("div"),
      cells: document.querySelectorAll(".game__playing-field-cell"),
    };

    html.element.classList.add("game__target");
    let prevPosition = this.getPrevPosition(html.cells);
    const numberCell = this.getRandomNumber(0, this.size - 1, prevPosition);

    if (prevPosition !== null) {
      html.cells[prevPosition].innerHTML = "";
    }

    html.cells[numberCell].appendChild(html.element);
  }

  getPrevPosition(cells) {
    let result = null;

    for (let i = 0; i < cells.length; i++) {
      if (cells[i].hasChildNodes()) {
        result = i;
        break;
      }
    }

    return result;
  }

  getRandomNumber(min, max, prev = null) {
    if (prev === null) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    } else {
      let result = null;

      do {
        result = Math.floor(Math.random() * (max - min + 1) + min);
      } while (result === prev);

      return result;
    }
  }
}
