const { UserInputError } = require('apollo-server-errors');

module.exports = {
  Query: {
    async getCountries(_, __, { dataSources }) {
      const data = await dataSources.CountryAPI.getCountries();
      return data;
    },

    async getCompetitionsCountry(_, { id }, { dataSources }) {
      if(isNaN(id)) {
        return new UserInputError('Invalid argument value', {
          argumentName: 'id'
        })
      }
      const data = await dataSources.CountryAPI.getCompetitionsCountry(id);
      return data;
    },

    async getLeague(_, { id }, { dataSources }) {
      if(isNaN(id)) {
        return new UserInputError('Invalid argument value', {
          argumentName: 'id'
        })
      }
      const data = await dataSources.LeagueAPI.getLeague(id);
      console.log(data)
      return data;
    },

    async getTopScorers(_, { id }, { dataSources }) {
      if(isNaN(id)) {
        return new UserInputError('Invalid argument value', {
          argumentName: 'id'
        })
      }
      const data = await dataSources.LeagueAPI.getTopScorers(id);
      return data;
    },

    async getResultMatches(_, { id, from, to }, { dataSources }) {
      if(isNaN(id)) {
        return new UserInputError('Invalid argument value', {
          argumentName: 'id'
        })
      }
      const data = await dataSources.LeagueAPI.getResultMatches({ league_id: id, from, to });
      return data;
    },
  },
};
