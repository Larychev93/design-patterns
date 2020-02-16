const readline = require('readline');
const {BodyPart} = require('./BodyPart');

class Ear extends BodyPart {
  constructor(brain) {
    super(brain);
    this.sounds = '';
  }

  hearSomething() {
    const dialogInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    dialogInterface.question('Enter what you hear: ', (answer) => {
      this.sounds = answer;

      dialogInterface.close();

      this.changed();
    });
  }

  get heardSound() {
    return this.sounds;
  }
}

module.exports = {
  Ear
};
