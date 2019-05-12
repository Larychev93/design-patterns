/**
 * @Описание Паттерн Адаптер
 * @Цели Этот паттерн оборачивает несовместимый с чем-то объект и делает его совместимым, не изменяя исходный код.
 **/

class Racer {
  static makeShow (car) {
    car.drift()
  }
}

class M3 {
  static drift () {
    console.log('Drift M3')
  }
}

class M5 {
  static drift () {
    console.log('Drift m5')
  }
}

class BMW320 {
  constructor () {
    this.saveDriveSystems = true
  }

  disableSystems () {
    this.saveDriveSystems = false
  }

  drive () {
    console.log('BMW 320 just drive')
  }
}

class BMWDriftAdapter {
  constructor (car) {
    this.car = car
  }

  drift () {
    this.car.disableSystems();

    console.log('Now you are able to drift')
  }
}

const stockBMW = new BMW320();
const BMWAdapter = new BMWDriftAdapter(stockBMW);

Racer.makeShow(BMWAdapter);
