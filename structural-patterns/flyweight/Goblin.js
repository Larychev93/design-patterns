const Unit = require('./Unit');

class Goblin extends Unit{
  constructor(imageFactory) {
    super({
      name: 'Goblin',
      health: 8,
      image: imageFactory.createGoblinImage(),
    });
  }
}

module.exports = Goblin;
