const GOBLIN_IMAGE = 'goblin.png';
const DRAGON_IMAGE = 'dragon.png';
const DRAGON_KEY = 'drag¢on';
const GOBLIN_KEY = 'goblin';

class UnitImagesFactory {
  constructor() {
    this.images = {};
  }

  createDragonImage() {
    if (this.images[DRAGON_KEY]) {
      return this.images[DRAGON_KEY]
    }

    this.images[DRAGON_KEY] = DRAGON_IMAGE
  }

  createGoblinImage() {
    if (this.images[GOBLIN_KEY]) {
      return this.images[GOBLIN_KEY]
    }

    this.images[GOBLIN_KEY] = GOBLIN_IMAGE
  }
}

module.exports = UnitImagesFactory;
