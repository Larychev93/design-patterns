const {BrickWallCreator} = require('./brick-wall-creator');
const {WoodenWallCreator} = require('./wooden-wall-creator');
const { BuildingCompany } = require('./bridge');

const brickWallCreator = new BrickWallCreator();
const woodenWallCreator = new WoodenWallCreator();

const buildingCompany = new BuildingCompany();

buildingCompany.buildFoundation();

buildingCompany.initWallCreator(brickWallCreator);
buildingCompany.buildRoom();

buildingCompany.initWallCreator(woodenWallCreator);
buildingCompany.buildRoom();

buildingCompany.buildRoof();
