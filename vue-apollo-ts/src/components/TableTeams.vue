<template>
  <div class="TableTeams">
    <div class="TableTeams__row TableTeams__row--header">
      <div class="TableTeams__position">№</div>
      <div class="TableTeams__name">Команда</div>
      <div class="TableTeams__games">Игры</div>
      <div class="TableTeams__points">Очки</div>
      <div class="TableTeams__wins">В</div>
      <div class="TableTeams__draw">Н</div>
      <div class="TableTeams__defeat">П</div>
      <div class="TableTeams__goals">ЗМ</div>
      <div class="TableTeams__conceded">ПМ</div>
      <div class="TableTeams__difference">РМ</div>
    </div>
    <div v-loading="loading">
      <template v-if="!error && teams?.length">
        <div class="TableTeams__row" v-for="team in teams" :key="team.team_id">
          <div class="TableTeams__position">
            {{ team.overall_league_position }}
          </div>
          <div class="TableTeams__name">
            <img :src="team.team_badge" class="TableTeams__logo" />
            <span class="TableTeams__signature">{{ team.team_name }}</span>
          </div>
          <div class="TableTeams__games">{{ team.overall_league_payed }}</div>
          <div class="TableTeams__points">{{ team.overall_league_PTS }}</div>
          <div class="TableTeams__wins">{{ team.overall_league_W }}</div>
          <div class="TableTeams__draw">{{ team.overall_league_D }}</div>
          <div class="TableTeams__defeat">{{ team.overall_league_L }}</div>
          <div class="TableTeams__goals">{{ team.overall_league_GF }}</div>
          <div class="TableTeams__conceded">{{ team.overall_league_GA }}</div>
          <div class="TableTeams__difference">
            {{ team.overall_league_GF - team.overall_league_GA }}
          </div>
        </div>
      </template>
      <div v-else class="TableTeams__absence">Нет данных</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useQuery } from "@vue/apollo-composable";

import { Query, QueryGetLeagueArgs } from "@/graphql/types";
import { GET_LEAGUE } from "@/graphql/query/index";

export default defineComponent({
  name: "TableTeams",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { result, loading, error } = useQuery<Query, QueryGetLeagueArgs>(
      GET_LEAGUE,
      {
        id: props.id,
      }
    );

    return {
      teams: computed(() => result.value?.getLeague),
      loading,
      error,
    };
  },
});
</script>

<style lang="scss">
.TableTeams {
  max-width: 800px;
  min-width: 600px;
  margin: 0 auto;

  &__row {
    display: flex;
    font-size: 14px;

    padding: 10px 0;

    &--header {
      font-weight: 700;
    }
  }

  &__signature {
    word-break: break-all;
  }

  &__name {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  &__logo {
    display: block;
    width: 24px;
    height: 24px;

    margin-right: 10px;
  }

  &__position,
  &__difference,
  &__conceded,
  &__goals,
  &__defeat,
  &__draw,
  &__wins,
  &__points,
  &__games {
    min-width: 45px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__absence {
    width: fit-content;
    font-size: 18px;
    color: #70757a;
    margin: 0 auto;
    padding-top: 30px;
  }
}
</style>
