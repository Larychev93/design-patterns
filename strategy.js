/**
 * @Описание Паттерн Стратегия
 * @Цели Повзоляет выбирать алгоритм поведения класу
 **/


class Rifle {
  constructor(name, caliber) {
    this.gun = {
      name: name,
      caliber: caliber
    }
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  reload () {
    this.strategy.reload()
  }

  automaticFire() {
    this.strategy.automaticFire(this.gun)
  }
}

class Remington {
  constructor() {
    this.fireRate = 1
  }

  static automaticFire(rifle) {
    console.error(`Hi I am ${rifle.name}, my caliber is ${rifle.caliber}. Sorry, no automatic fire mode`)
  }
}

class AR15 {
  constructor() {
    this.fireRate = 150
  }

  static automaticFire(rifle) {
    console.log(`Hi I am ${rifle.name}, my caliber is ${rifle.caliber} and i can make tratata with fire rate ${this.fireRate}`)
  }
}

let rifle = new Rifle('Remington', 12)

rifle.setStrategy(Remington)

rifle.automaticFire()
