class BodyPart {
  constructor(brain) {
    this.brain = brain;
  }

  changed() {
    this.brain.somethingHappenedToBodyPart(this)
  }
}

module.exports = {
  BodyPart
};
