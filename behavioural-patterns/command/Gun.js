class Gun {
  constructor(name) {
    if (!name) {
      throw new Error('Sorry, name is required for me')
    }

    this.name = name
  }

  fire() {
    console.log(`${this.name} is going to make some noise`)
  }

  reload() {
    console.log(`${this.name} is empty, going to reload`)
  }
}

module.exports = {
  Gun
};
