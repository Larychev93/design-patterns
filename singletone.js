/**
 * @Описание Одиночка (англ. Singleton) — порождающий шаблон проектирования,
 * гарантирующий что в однопоточном приложении будет единственный экземпляр класса
 * с глобальной точкой доступа.
 *
 * @Цели Гарантирует, что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа.
 */

class Universe {
  constructor() {
    if (Universe.instance) {
      throw new Error('Please use getUniverseInstance')
    } else {
      this.startTime = 0;
      this.bang = 'Big';

      Universe.instance = this
    }
  }

  static getUniverseInstance () {
    return Universe.instance
  }
}

let first = new Universe();
let second = first.getUniverseInstance();

console.log(first === second); //SingleTone

let firstObject = { startTime: 0 };

let secondObject = { startTime: 0 };

console.log(firstObject === secondObject); //noSingletone