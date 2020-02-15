class Logger {
  constructor() {
    this.logs = []
  }

  add(message) {
    this.logs.push(message);
  }

  show() {
    console.log(this.logs);
  }
}

module.exports = Logger;
