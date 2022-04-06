const Abstarct = require('./abstractClass');

module.exports = class LeagueAPI extends Abstarct {

  async getLeague(league_id) {
    return this.get('', {  action: this.action.get_standings, league_id  });
  }

  async getTopScorers (league_id) {
    return this.get('', {  action: this.action.get_topscorers, league_id});
  }

  async getResultMatches({ league_id, from, to }) {
    return this.get('', {  action: this.action.get_events, league_id, from, to  });
  }
}