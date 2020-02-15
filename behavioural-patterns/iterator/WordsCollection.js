const {AlphabeticalOrderIterator} = require('./AlphabeticalOrderIterator');

class WordsCollection {
  constructor(items = []) {
    this.items = items
  }

  get getItems() {
    return this.items;
  }

  get getCount() {
    return this.items.length;
  }

  addItem(item) {
    if(!item) {
      throw new Error('Item should be presented')
    }

    this.items.push(item);
  }

  getIterator() {
    return new AlphabeticalOrderIterator(this);
  }

  getReverseIterator() {
    return new AlphabeticalOrderIterator(this, true);
  }
}

module.exports = {
  WordsCollection
};
