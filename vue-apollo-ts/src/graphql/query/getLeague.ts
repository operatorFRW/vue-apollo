import gql from "graphql-tag";

export const GET_LEAGUE = gql`
  query getLeague($id: ID!) {
    getLeague(id: $id) {
      overall_league_D
      overall_league_GA
      overall_league_GF
      overall_league_L
      overall_league_PTS
      overall_league_W
      overall_league_payed
      overall_league_position
      team_badge
      team_id
      team_name
    }
  }
`;
