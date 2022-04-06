const { RESTDataSource } = require('apollo-datasource-rest');

module.exports = class API extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://apiv3.apifootball.com/';
    this.action = {
      get_countries: "get_countries",
      get_leagues: "get_leagues",
      get_teams: "get_teams",
      get_players: "get_players",
      get_standings: "get_standings",
      get_topscorers: "get_topscorers",
      get_events: "get_events"
    }
  }

  willSendRequest(request) {
    request.params.set('APIkey', 'ddd5f3a354e3ccdc7559638a6b3dcfb94f8c8288d66d63510b5c0d0d23f277e2');
  }
}