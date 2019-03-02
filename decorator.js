/**
 * @Описание Паттерн Декаоратор
 * @Цели Динамически добавлять дополнительную фунциональность объекту
**/

class SimpleCoffee {

  getCost() {
    return 10
  }

  getDescription () {
    return 'Simple coffee'
  }
}

class MilkCoffee {
  constructor (coffee) {
    this.coffee = coffee
  }

  getCost () {
    return this.coffee.getCost() + 2
  }

  getDescription () {
    return this.coffee.getDescription() + ' + milk'
  }
}

class IrishCoffee {
  constructor (coffee) {
    this.coffee = coffee
  }

  getCost () {
    return this.coffee.getCost() + 20
  }

  getDescription () {
    return this.coffee.getDescription() + ' + scotch'
  }
}


let someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new IrishCoffee(someCoffee);
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());