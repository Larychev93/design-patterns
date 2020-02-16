const {BodyPart} = require('./BodyPart');

class Hand extends BodyPart{
  constructor(brain) {
    super(brain)
  }

  hitPersonInFace() {
    console.log('Hand: Hitting in ugly face')
  }
}

module.exports = {
  Hand
};
