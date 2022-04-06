const Country = require('./country');
const League = require('./league');
const Team = require('./team');

module.exports = {
  CountryAPI: new Country(),
  LeagueAPI: new League(),
  TeamAPI: new Team()
}