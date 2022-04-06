import gql from "graphql-tag";

export const GET_COMPETITIONS_COUNTRY = gql`
  query getCompetitionsCountry($id: ID!) {
    getCompetitionsCountry(id: $id) {
      country_id
      country_name
      country_logo
      league_id
      league_name
      league_season
      league_logo
    }
  }
`;
