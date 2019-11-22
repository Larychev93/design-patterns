/**
 * @Описание Одиночка (англ. Singleton) — порождающий шаблон проектирования,
 * гарантирующий что в однопоточном приложении будет единственный экземпляр класса
 * с глобальной точкой доступа.
 *
 * @Цели Гарантирует, что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа.
 */

class Database {
  constructor(data) {
    if (Database.instance) {
      throw new Error('Please use getDatabaseInstance')
    } else {
      this._data = data;

      Database.instance = this
    }
  }

  getData() {
    return this._data;
  }

  static getDatabaseInstance () {
    return Database.instance
  }
}

const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mysql.getData()); // error
