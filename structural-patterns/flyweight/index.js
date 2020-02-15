const Goblin = require('./Goblin');
const Dragon = require('./Dragon');
const UnitImagesFactory = require('./UnitImagesFactory');

const list = [];
const imageFactory = new UnitImagesFactory();

for (let index = 0; index <=50; index++) {
  list.push(new Goblin(imageFactory))
}

for (let index = 0; index <=50; index++) {
  list.push(new Dragon(imageFactory))
}
