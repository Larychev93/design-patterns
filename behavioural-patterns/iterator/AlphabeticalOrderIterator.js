class AlphabeticalOrderIterator {
  constructor(collection, isReverse = false) {
    if (!collection) {
      throw new Error('collection should be present')
    }

    this.collection = collection;
    this.reverse = isReverse;
    this.position = this.setupPosition();
  }

  setupPosition() {
    return this.reverse ? this.collection.getCount - 1 : 0
  }

  rewind() {
    this.position = this.setupPosition();
  }

  current() {
    return this.collection.getItems()[this.position];
  }

  key() {
    return this.position;
  }

  next() {
    const item = this.collection.getItems[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  valid() {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount;
  }
}

module.exports = {
  AlphabeticalOrderIterator
};
