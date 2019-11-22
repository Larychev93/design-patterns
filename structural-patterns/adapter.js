/**
 * @Описание Паттерн Адаптер
 * @Цели Этот паттерн оборачивает несовместимый с чем-то объект и делает его совместимым, не изменяя исходный код.
 * Подходит для того чтобы использовать старый код на новую логику, ничего не ломая
 **/

class OldElectricitySystem {
  matchThinSocket() {
    return '220V'
  }
}

class NewElectricitySystem {
  matchWideSocket() {
    return '220V'
  }
}

class ElectricityAdapter {
  constructor() {
    this._adaptee = new OldElectricitySystem()
  }

  matchWideSocket() {
    return this._adaptee.matchThinSocket()
  }
}

class LaptopCharger {
  static charge(electricitySystem) {
    console.log(electricitySystem.matchWideSocket())
  }
}

const newElectricitySystem = new NewElectricitySystem();
LaptopCharger.charge(newElectricitySystem);

const oldElectricitySystem = new OldElectricitySystem();
const adapter = new ElectricityAdapter(oldElectricitySystem);

LaptopCharger.charge(adapter);


