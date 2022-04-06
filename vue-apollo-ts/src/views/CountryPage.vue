<template>
  <div class="CountryPage">
    <LayoutHeader>
      <h1 class="CountryPage__title">Список лиг</h1>
      <p class="CountryPage__country">
        Выбранная страна:
        <span>{{ country?.country_name || "Нет данных" }}</span>
      </p>
    </LayoutHeader>
    <main class="CountryPage__main">
      <div class="global-container" v-loading="loading">
        <ul class="CountryPage__list" v-if="!error && competitions?.length">
          <li
            class="CountryPage__item"
            v-for="competition in competitions"
            :key="competition.league_id"
          >
            <router-link :to="`/league/${competition.league_id}/table`">
              <CardLeague :competition="competition" />
            </router-link>
          </li>
        </ul>
        <p v-else class="CountryPage__absence">Нет данных</p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useQuery } from "@vue/apollo-composable";

import { Query, QueryGetCompetitionsCountryArgs } from "@/graphql/types";
import { GET_COMPETITIONS_COUNTRY } from "@/graphql/query/index";

import CardLeague from "@/components/CardLeague.vue";
import LayoutHeader from "@/layouts/LayoutHeader.vue";

export default defineComponent({
  name: "CountryPage",
  components: {
    CardLeague,
    LayoutHeader,
  },
  setup() {
    const { currentRoute } = useRouter();

    const { result, error, loading } = useQuery<
      Query,
      QueryGetCompetitionsCountryArgs
    >(GET_COMPETITIONS_COUNTRY, {
      id: currentRoute.value.params?.id as string,
    });

    return {
      error,
      competitions: computed(() => result.value?.getCompetitionsCountry),
      country: computed(() => result.value?.getCompetitionsCountry[0]),
      loading,
    };
  },
});
</script>

<style scoped lang="scss">
.CountryPage {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    width: 500px;
  }

  &__title {
    margin: 0 auto;
    width: fit-content;

    color: white;
    margin-bottom: 15px;
    font-size: 32px;
    font-weight: 700;
  }

  &__country {
    margin: 0 auto;
    width: fit-content;
    color: white;
    font-size: 18px;

    & > span {
      font-weight: 600;
      display: inline-block;
      border-bottom: 2px solid white;
    }
  }

  &__main {
    padding: 30px 0;
  }

  &__absence {
    width: fit-content;
    font-size: 18px;
    color: #70757a;
    margin: 0 auto;
  }
}
</style>
