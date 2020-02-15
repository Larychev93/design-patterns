const { Command } = require('./Command');
const { Gun } = require('./Gun');

const akOperator = new Command(new Gun('AK-47'));
akOperator.execute('fire');
akOperator.execute('reload');

const arOperator = new Command(new Gun('AR'));
arOperator.execute('fire');

console.log('AK commands: ', akOperator.commandsExecuted);
console.log('AR commands: ', arOperator.commandsExecuted);
