import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Country = {
  __typename?: 'Country';
  country_id: Scalars['ID'];
  country_logo: Scalars['String'];
  country_name: Scalars['String'];
};

export type DataMatch = {
  __typename?: 'DataMatch';
  match_awayteam_name: Scalars['String'];
  match_awayteam_score: Scalars['String'];
  match_date: Scalars['String'];
  match_hometeam_name: Scalars['String'];
  match_hometeam_score: Scalars['String'];
  match_id: Scalars['String'];
  match_status: Scalars['String'];
  match_time: Scalars['String'];
  team_away_badge?: Maybe<Scalars['String']>;
  team_home_badge?: Maybe<Scalars['String']>;
};

export type League = {
  __typename?: 'League';
  country_id: Scalars['ID'];
  country_logo: Scalars['String'];
  country_name: Scalars['String'];
  league_id: Scalars['ID'];
  league_logo: Scalars['String'];
  league_name: Scalars['String'];
  league_season: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCompetitionsCountry: Array<League>;
  getCountries: Array<Country>;
  getLeague: Array<ResultLeague>;
  getResultMatches: Array<DataMatch>;
  getTopScorers: Array<TopScorer>;
};


export type QueryGetCompetitionsCountryArgs = {
  id: Scalars['ID'];
};


export type QueryGetLeagueArgs = {
  id: Scalars['ID'];
};


export type QueryGetResultMatchesArgs = {
  from: Scalars['String'];
  id: Scalars['ID'];
  to: Scalars['String'];
};


export type QueryGetTopScorersArgs = {
  id: Scalars['ID'];
};

export type ResultLeague = {
  __typename?: 'ResultLeague';
  overall_league_D: Scalars['String'];
  overall_league_GA: Scalars['String'];
  overall_league_GF: Scalars['String'];
  overall_league_L: Scalars['String'];
  overall_league_PTS: Scalars['String'];
  overall_league_W: Scalars['String'];
  overall_league_payed: Scalars['String'];
  overall_league_position: Scalars['String'];
  team_badge?: Maybe<Scalars['String']>;
  team_id: Scalars['ID'];
  team_name: Scalars['String'];
};

export type TopScorer = {
  __typename?: 'TopScorer';
  assists: Scalars['String'];
  goals: Scalars['String'];
  penalty_goals: Scalars['String'];
  player_key: Scalars['ID'];
  player_name: Scalars['String'];
  player_place: Scalars['String'];
  team_name: Scalars['String'];
};
