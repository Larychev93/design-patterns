const { Subject } = require('./Subject');
const { Observer, INCREMENT_ACTION, DECREMENT_ACTION } = require('./Observer');

const subscriber = new Subject();

const publisherFirst = new Observer(1);
const publisherSecond = new Observer(19);

subscriber.subscribe(publisherFirst);
subscriber.subscribe(publisherSecond);

subscriber.fire(INCREMENT_ACTION);

console.log(publisherFirst.state);
console.log(publisherSecond.state);

subscriber.fire(DECREMENT_ACTION);

console.log(publisherFirst.state);
console.log(publisherSecond.state);

subscriber.unsubscribe([publisherFirst, publisherSecond]);

subscriber.fire(DECREMENT_ACTION);

console.log(publisherFirst.state);
console.log(publisherSecond.state);
