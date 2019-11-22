/**
 * @Описание Паттерн Прототип
 * @Цели Этот шаблон позволяет создавать копии объектов что уже определенны на стадии дизайна
 **/


const PRIORITIES = {
  low: 0,
  medium: 1,
  high: 3
};


class CalendarEvent {
  constructor() {
    this.atendees = [];
    this.dateTime = new Date();
    this.priority = PRIORITIES.low
  }

  get date() {
    return this.dateTime
  }

  setFeature(key, value) {
    this[key] = value
  }

  Clone () {
    let clone = new CalendarEvent();
    let keys = Object.keys(this);

    keys.forEach(feature => clone.setFeature(feature, this[feature]));

    return clone;
  }
}

const beerPartyToday = new CalendarEvent();
let members = [
  { name: 'Vader', status: 'active' },
  { name: 'Solo', status: 'inactive' },
  { name: 'R2D2', status: 'active' }
];
beerPartyToday.setFeature('atendees', members);

const nextWeekParty = beerPartyToday.Clone();
nextWeekParty.setFeature('priority', PRIORITIES.high);
nextWeekParty.setFeature('dateTime', new Date(nextWeekParty.date.getTime() + 7 * 24 * 60 * 60 * 1000));

console.log(nextWeekParty);

console.log(beerPartyToday);
