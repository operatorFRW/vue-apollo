const { gql } = require('apollo-server');

module.exports = gql`

  type Country {
    country_id: ID!
    country_name: String!
    country_logo: String!
  }

  type League {
    country_id: ID!
    country_name: String!
    country_logo: String!
    league_id: ID!
    league_name: String!
    league_season: String!
    league_logo: String!
  }

  type ResultLeague {
    overall_league_D: String!
    overall_league_GA: String!
    overall_league_GF: String!
    overall_league_L: String!
    overall_league_PTS: String!
    overall_league_W: String!
    overall_league_payed: String!
    overall_league_position: String!
    team_badge: String
    team_id: ID!
    team_name: String!
  }

  type TopScorer {
    player_place: String!
    player_name: String!
    player_key: ID!
    team_name: String!
    goals: String!
    assists: String!
    penalty_goals: String!
  }

  type DataMatch {
    match_id: String!
    match_date: String!
    match_status: String!
    match_time: String!
    match_hometeam_name: String!
    match_hometeam_score: String!
    match_awayteam_name: String!
    match_awayteam_score: String!
    team_home_badge: String
    team_away_badge: String
  }


  type Query {
    getCountries: [Country!]!
    getCompetitionsCountry(id: ID!): [League!]!
    getLeague(id: ID!): [ResultLeague!]!
    getTopScorers(id: ID!): [TopScorer!]!
    getResultMatches(id: ID!, from: String!, to: String!): [DataMatch!]!
  }
`