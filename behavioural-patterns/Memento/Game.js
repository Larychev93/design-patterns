const {GameMemento} = require('./GameMemento');

class Game {
  constructor(state = { health: 100, killedMonsters: 0 }) {
    this.state = state;
    console.log(`Game: My initial state is: ${JSON.stringify(this.state)}`);
  }

  play() {
    console.log(`State is: ${JSON.stringify(this.state)}`);

    this.state = {
      health: this.state.health - 10,
      killedMonsters: this.state.killedMonsters + 2
    }
  }

  save() {
    return new GameMemento(this.state);
  }

  load(memento) {
    this.state = memento.getState();

    console.log(' State from game save: ', JSON.stringify(this.state))
  }
}

module.exports = {
  Game
};
