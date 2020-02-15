const GeoProxy = require('./GeoProxy');

const geo = new GeoProxy();

geo.parse("Paris");
geo.parse("London");
geo.parse("London");
geo.parse("London");
geo.parse("London");
geo.parse("Amsterdam");
geo.parse("Amsterdam");
geo.parse("Amsterdam");
geo.parse("Amsterdam");
geo.parse("London");
geo.parse("London");

geo.logger.show();
