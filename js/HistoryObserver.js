class HistoryObserver {
  constructor() {
    this.colorHistory = [];
  }

  update(model){
    this.colorHistory = [ model.color[0].toLowerCase(), ...this.colorHistory];

    const colorsString = this.colorHistory.join(" ");
    const message = `The most recent 5 colors were: ${colorsString}`;
    console.log(message);
  }
}