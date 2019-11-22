/**
 * @Описание Фабричный метод
 * @Цели Этот шаблон определяет интерфейс для создания объектов.
 * Решает какую реализацию использовать с помощью параметров
 **/


class StormTrooperFactory {
  constructor(type, props) {
    if(type === 'helmet')
      return new HelmetFactory(props);
    if(type === "blaster")
      return new BlasterFactory(props);
    if(type === "clone")
      return new CloneFactory(props);
  }
};

class HelmetFactory {
  constructor(props) {
    this.size = props.size;
  }
};

class BlasterFactory {
  constructor(props) {
    this.accuracy = props.accuracy;
  }
};

class CloneFactory {
  constructor(props) {
    this.name = props.name;
  }
};

let stormTrooper = {};
let stormTrooperProps = {
  size: 'xl',
  accuracy: 0.2,
  name: 'clone-01'
};

stormTrooper.helmet  = new StormTrooperFactory("helmet", stormTrooperProps);

stormTrooper.blaster = new StormTrooperFactory("blaster", stormTrooperProps);

//gets a head from the head factory
stormTrooper.clone  = new StormTrooperFactory("clone", stormTrooperProps);

console.log(stormTrooper)
