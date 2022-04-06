import gql from "graphql-tag";

export const GET_RESULT_MATCHES = gql`
  query getResultMatches($id: ID!, $from: String!, $to: String!){
    getResultMatches(id: $id, from: $from, to: $to) {
      match_id
      match_date
      match_status
      match_time
      match_hometeam_name
      match_hometeam_score
      match_awayteam_name
      match_awayteam_score
      team_home_badge
      team_away_badge
    }
  }
`;
