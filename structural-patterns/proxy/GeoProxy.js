const GeoCoder = require('./GeoCoder');
const Logger = require('./Logger');

class GeoProxy {
  constructor() {
    this.geocoder = new GeoCoder();
    this.logger = new Logger();
    this.geocache = {};
  }

  parse(address) {
    if (!this.geocache[address]) {
      this.geocache[address] = this.geocoder.parse(address);

      this.logger.add(address + ": " + this.geocache[address]);
    }

    return this.geocache[address];
  }

  getCount() {
    return Object.keys(this.geocache).length
  }
}


module.exports = GeoProxy;
