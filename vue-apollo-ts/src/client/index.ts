import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const cache = new InMemoryCache({
  typePolicies: {
    League: {
      keyFields: ["league_id"],
    },
    Country: {
      keyFields: ["country_id"],
    },
    ResultLeague: {
      keyFields: ["team_id"],
    },
    DataMatch: {
      keyFields: ["match_id"],
    },
    TopScorer: {
      keyFields: ["player_key"],
    },
  },
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default apolloClient;
