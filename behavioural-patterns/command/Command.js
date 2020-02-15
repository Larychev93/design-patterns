class Command {
  constructor(subject) {
    this._subject = subject;
    this.commandsExecuted = [];
  }
  execute(command) {
    this.commandsExecuted.push(command);

    return this._subject[command]();
  }
}

module.exports = {
  Command
};
