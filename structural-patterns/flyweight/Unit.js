class Unit {
  constructor({name, health, image}) {
    this.name = name;
    this.health = health;
    this.image = image;
  }

  get unitName() {
    return this.name;
  }

  get unitHealth() {
    return this.health;
  }

  get unitImage() {
    return this.image;
  }
}

module.exports = Unit;
