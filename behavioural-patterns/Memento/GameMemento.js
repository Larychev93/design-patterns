class GameMemento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

module.exports = {
  GameMemento
};
