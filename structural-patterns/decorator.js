/**
 * @Описание Паттерн Декаоратор
 * @Цели Динамически добавлять дополнительную фунциональность объекту
**/

class Car {
  constructor({ brandName }) {
   this.brandName = brandName
  }

  getBrand() {
    return this.brandName;
  }

  go () {
    return `Hi, i am ${this.brandName} and i am on my way`
  }
}

class PresidentCar {
  constructor (car) {
    this.car = car
  }

  go () {
    return `Hi, i am ${this.car.brandName} and i am on my way even if light is red`
  }
}

class ArmorCar {
  constructor (car) {
    this.car = car
  }

  go () {
    return `Hi, i am ${this.car.brandName} and be polite with me`
  }
}

const audiA6 = new Car({ brandName: 'Audi' });

const presidentsCar = new PresidentCar(audiA6);

const survivalCar = new ArmorCar(audiA6);

console.log(audiA6.go());
console.log(presidentsCar.go());
console.log(survivalCar.go());
