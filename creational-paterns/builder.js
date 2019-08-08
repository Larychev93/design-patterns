/**
 * @Описание Паттерн Строитель
 * @Цели Этот шаблон позволяет создавать различные варианты объекта без загрязнения конструктора лишним кодом.
 **/

class Project {
  constructor (builder) {
    this.frontendGuys = builder.frontendGuys;
    this.backendGuys = builder.backendGuys;
    this.QAGuys = builder.QAGuys;
    this.designGuys = builder.designGuys
  }
}

class ProjectBuilder {

  constructor(name) {
    this.name = name
  }

  addFrontendDevs(developers) {
    this.frontendGuys = developers;

    return this
  }

  addBackenddDevs(developers) {
    this.backendGuys = developers;

    return this
  }

  AddQAGuys(developers) {
    this.QAGuys = developers;

    return this
  }

  AddDesignGuys(developers) {
    this.designGuys = developers;

    return this
  }


  build() {
    return new Project(this)
  }
}

const awesomeProject = (new ProjectBuilder('Awesome Project'))
  .addBackenddDevs(['test'])
  .addFrontendDevs(['test'])
  .AddQAGuys(['test'])
  .AddDesignGuys(['test'])
  .build();

console.log(awesomeProject);

