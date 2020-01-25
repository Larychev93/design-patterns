class Subject {
  constructor() {
    this._observers = [];
  }

  subscribe(observer) {
    this._observers.push(observer);
  }

  unsubscribe(observers) {
    this._observers = this._observers.filter(observer => !observers.includes(observer))
  }

  fire(change) {
    this._observers.forEach(observer =>  observer.update(change));
  }
}

module.exports = { Subject };
