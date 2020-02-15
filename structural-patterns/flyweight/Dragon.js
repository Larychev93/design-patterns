const Unit = require('./Unit');

class Dragon extends Unit{
  constructor(imageFactory) {
    super({
      name: 'Dragon',
      health: 8,
      image: imageFactory.createDragonImage(),
    });
  }
}

module.exports = Dragon;
