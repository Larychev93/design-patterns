const {BodyPart} = require('./BodyPart');

class Face extends BodyPart{
  constructor(brain) {
    super(brain)
  }

  smile() {
    console.log('Face: Smiling');
  }
}

module.exports = {
  Face
};
