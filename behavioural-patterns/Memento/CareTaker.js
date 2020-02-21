const {Game} = require('./Game');

class CareTaker {
  constructor() {
    this.gameOriginator = new Game();
    this.saves = [];
  }

  shotThatMonster() {
    this.gameOriginator.play();
  }

  f5() {
    this.saves.push(this.gameOriginator.save());
  }

  f9() {
    if (!this.saves.length) {
      return;
    }
    const save = this.saves.pop();

    this.gameOriginator.load(save)
  }
}

module.exports = {
  CareTaker
};
