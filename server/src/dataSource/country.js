const Abstarct = require('./abstractClass');

module.exports = class CountryAPI extends Abstarct {

  async getCountries() {
    return this.get('', {  action: this.action.get_countries,  });
  }

  async getCompetitionsCountry(country_id) {
    return this.get('', { action: this.action.get_leagues, country_id  });
  }
}