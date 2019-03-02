/**
 @Описание Шаблон Фабричный метод. порождающий шаблон проектирования,
 предоставляющий подклассам (дочерним классам)
 интерфейс для создания экземпляров некоторого класса.
 **/

class VehicleFactory {
  createVehicle(type, options) {
    switch (type) {
      case 'car':
        return new Car(options.wheels, options.passengers, options.airbags);
      case 'bike':
        return new Bike(options.wheels, options.passengers, options.airbags);
    }
  }
}

class Vehicle {
  constructor(wheels, airbags, passengers) {
    this.wheels = wheels;
    this.airbags = airbags;
    this.passengers = passengers
  }

  get isMoreFun() {
    return this.wheels === 2
  }

  get isSaveEnough() {
    return this.airbags
  }
}

class Car extends Vehicle {
  constructor(wheels = 4, airbags = true, passengers = 3) {
    super(wheels, airbags, passengers);

    this.bagage = 0
  }

  mountBagage(weight) {
    this.bagage = weight
  }
}

class Bike extends Vehicle {
  constructor(wheels = 2, airbags = false, passengers = 1) {
    super(wheels, airbags, passengers);
  }

  makeWheelie() {
    this.wheels--;
    console.log(this.wheels)
  }
}

const vehicleFactory = new VehicleFactory();

const car = vehicleFactory.createVehicle('car', {
  wheels: 4,
  passengers: 2,
  airbags: false
});

const bike = vehicleFactory.createVehicle('bike', {
  wheels: 2
});

console.log(car.isMoreFun);
console.log(bike.isMoreFun);

car.mountBagage(100);
bike.makeWheelie();




