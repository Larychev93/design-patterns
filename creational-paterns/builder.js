/**
 * @Описание Паттерн Строитель
 * @Цели Этот шаблон позволяет создавать различные варианты объекта без загрязнения конструктора лишним кодом.
 **/

class Project {
  constructor(builder) {
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

  addQADevs(developers) {
    this.QAGuys = developers;

    return this
  }

  addDesignDevs(developers) {
    this.designGuys = developers;

    return this
  }


  build() {
    return new Project(this)
  }
}

const fullTeamProject = (new ProjectBuilder('Full team Project'))
.addBackenddDevs(['backend #1'])
.addFrontendDevs(['frontend #1'])
.addQADevs(['QA #1'])
.addDesignDevs(['Design #1'])
.build();

const designOnlyProject = (new ProjectBuilder('Design only project'))
.addDesignDevs(['Designer #1', 'Designer #2'])
.addQADevs(['QA #1'])
.build();


console.log(`Full team project: ${JSON.stringify(fullTeamProject)}`);
console.log(`Design only project: ${JSON.stringify(designOnlyProject)}`);

