class BuildingCompany {
  constructor() {
    this.wallCreator = null;
  }

  initWallCreator(wallCreator) {
    this.wallCreator = wallCreator;
  }

  buildFoundation() {
    return console.log('Foundations is built')
  }

  buildRoom() {
    if (!this.wallCreator) {
      throw new Error('You need men power for this task!')
    }

    this.wallCreator.buildWallWithDoor();
    this.wallCreator.buildWall();
    this.wallCreator.buildWallWithWindow();
    this.wallCreator.buildWall();
  }

  buildRoof() {
    return console.log('Roof is done');
  }
}

module.exports = {
  BuildingCompany
}
