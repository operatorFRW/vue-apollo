const Abstarct = require('./abstractClass');

module.exports = class TeamAPI extends Abstarct {

  async getTeam(team_id) {
    return this.get('/', {  action: this.action.get_teams, team_id  });
  }

  async getResultMatches({ team_id, from, to }) {
    return this.get('/', {  action: this.action.get_events, team_id, from, to  });
  }
}