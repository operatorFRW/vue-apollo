import gql from "graphql-tag";

export const GET_TOP_SCORERS = gql`
  query getTopScorers($id: ID!){
    getTopScorers(id: $id) {
      player_place
      player_name
      player_key
      team_name
      goals
      assists
      penalty_goals
    }
  }
`;
