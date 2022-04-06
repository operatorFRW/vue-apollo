import gql from "graphql-tag";

export const GET_COUNTRIES = gql`
  query getCountries {
    getCountries {
      country_id
      country_name
      country_logo
    }
  }
`;
