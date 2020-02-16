const {Face} = require('./Face');
const {Hand} = require('./Hand');
const {Ear} = require('./Ear');

class Brain {
  constructor() {
    this.createBodyParts()
  }

  createBodyParts() {
    this.ear = new Ear(this);
    this.hand = new Hand(this);
    this.face = new Face(this);
  }

  get earPart() {
    return this.ear;
  }

  get handPart() {
    return this.hand;
  }

  get facePart() {
    return this.face
  }

  somethingHappenedToBodyPart(part) {
    if (part instanceof Ear) {
      const heardSounds = part.heardSound;

      if (heardSounds.includes('stupid')) {
        this.handPart.hitPersonInFace()
      } else {
        this.facePart.smile();
      }
    }
  }
}

module.exports = {
  Brain
};
