<template>
  <div class="TableTopScorers">
    <div class="TableTopScorers__row TableTopScorers__row--header">
      <div class="TableTopScorers__position">№</div>
      <div class="TableTopScorers__name">Имя</div>
      <div class="TableTopScorers__team">Команда</div>
      <div class="TableTopScorers__goals">Г</div>
      <div class="TableTopScorers__assist">A</div>
      <div class="TableTopScorers__pen">П</div>
    </div>
    <div v-loading="loading">
      <template v-if="!error && scorers?.length">
        <div
          class="TableTopScorers__row"
          v-for="scorer in scorers"
          :key="scorer.player_key"
        >
          <div class="TableTopScorers__position">{{ scorer.player_place }}</div>
          <div class="TableTopScorers__name">{{ scorer.player_name }}</div>
          <div class="TableTopScorers__team">{{ scorer.team_name }}</div>
          <div class="TableTopScorers__goals">{{ scorer.goals || 0 }}</div>
          <div class="TableTopScorers__assist">{{ scorer.assists || 0 }}</div>
          <div class="TableTopScorers__pen">
            {{ scorer.penalty_goals || 0 }}
          </div>
        </div>
      </template>
      <div v-else class="TableTopScorers__absence">Нет данных</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useQuery } from "@vue/apollo-composable";

import { Query, QueryGetTopScorersArgs } from "@/graphql/types";
import { GET_TOP_SCORERS } from "@/graphql/query/index";

export default defineComponent({
  name: "TableTopScorers",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { result, loading, error } = useQuery<Query, QueryGetTopScorersArgs>(
      GET_TOP_SCORERS,
      {
        id: props.id,
      }
    );

    return {
      scorers: computed(() => result.value?.getTopScorers),
      loading,
      error,
    };
  },
});
</script>

<style lang="scss" scoped>
.TableTopScorers {
  max-width: 500px;
  min-width: 500px;
  margin: 0 auto;

  &__row {
    display: flex;
    font-size: 14px;

    padding: 10px 0;

    &--header {
      font-weight: 700;
    }
  }

  &__position,
  &__goals,
  &__assist,
  &__pen {
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__name,
  &__team {
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-all;
    width: 100%;
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
