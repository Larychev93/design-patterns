const INCREMENT_ACTION = 'INC';
const DECREMENT_ACTION = 'DEC';

class Observer {
  constructor(state) {
    this.state = state;
    this.initialState = state;
  }

  update(change) {
    let state = this.state;

    switch (change) {
      case INCREMENT_ACTION:
        this.state = ++state;
        break;
      case DECREMENT_ACTION:
        this.state = --state;
        break;
      default:
        this.state = this.initialState;
    }
  }
}

module.exports = {
  Observer,
  INCREMENT_ACTION,
  DECREMENT_ACTION
};

