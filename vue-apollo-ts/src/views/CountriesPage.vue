<template>
  <div class="Countries">
    <LayoutHeader>
      <h1 class="Countries__title">Список стран</h1>
      <div class="Countries__wrapSearch">
        <label class="Countries__label" for="search">Поиск по названию:</label>
        <field-search v-model="searchValue" id="search" class="Countries__fieldSearch" />
      </div>
    </LayoutHeader>
    <main class="Countries__main">
      <div class="global-container" v-loading="loading">
        <ul class="Countries__list" v-if="!error && countries?.length">
          <li
            class="Countries__item"
            v-for="country in countries"
            :key="country.country_id"
          >
            <router-link :to="`/country/${country.country_id}`">
              <CardCountry :country="country" />
            </router-link>
          </li>
        </ul>
        <p v-else class="Countries__absence">Нет данных</p>
        <el-pagination
          class="Countries__pagination"
          background
          layout="prev, pager, next"
          :pageSize="paginationParam.pageSize"
          :total="total"
          v-model:current-page="paginationParam.currentPage"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { useRouter } from "vue-router";

import { Country, Query } from "../graphql/types";
import { GET_COUNTRIES } from "../graphql/query";
import { findOccurrence } from "@/utils/findOccurrence";
import handlerError from "@/utils/handlerError";

import CardCountry from "@/components/CardCountry.vue";
import FieldSearch from "@/components/FieldSearch.vue";
import LayoutHeader from "@/layouts/LayoutHeader.vue";

import client from "../client";
import { gql } from "@apollo/client";

export default defineComponent({
  name: "CountriesPage",
  components: { CardCountry, FieldSearch, LayoutHeader },
  setup() {
    const router = useRouter();
    const { result, loading, error } = useQuery<Query>(GET_COUNTRIES);
    const paginationParam = reactive({
      currentPage: 1,
      pageSize: 20,
    });
    const searchValue = ref(
      (router.currentRoute.value.query.search as string) || ""
    );

    watch(searchValue, () => {
      if (searchValue.value) {
        router.replace({ query: { search: searchValue.value } });
        return;
      }
      router.replace({ query: {} });
    });

    const countries = computed<Country[]>(() => {
      const startIndex =
        (paginationParam.currentPage - 1) * paginationParam.pageSize;
      if (!searchValue.value) {
        return result.value?.getCountries.slice(
          startIndex,
          startIndex + paginationParam.pageSize
        ) as Country[];
      }
      return result.value?.getCountries
        .filter((country) =>
          findOccurrence(country.country_name, searchValue.value)
        )
        .slice(startIndex, startIndex + paginationParam.pageSize) as Country[];
    });

    const total = computed<number>(() => {
      if (searchValue.value) {
        return countries.value.length;
      }
      return result.value?.getCountries.length || 0;
    });

    watch(error, () => {
      handlerError(error.value);
    });

    return {
      countries,
      searchValue,
      loading,
      error,
      paginationParam,
      total,
    };
  },
});
</script>

<style lang="scss" scoped>
.Countries {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__item {
    width: 200px;
  }

  &__fieldSearch {
    min-width: 500px;
    margin: 0 auto;
  }

  &__pagination {
    margin: 0 auto;
    width: min-content;
    padding-top: 40px;
  }

  &__title {
    font-size: 32px;
    font-weight: 700;
    color: white;

    margin: 0 auto;
    margin-bottom: 15px;
    width: fit-content;
  }

  &__wrapSearch {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__label {
    width: fit-content;
    margin-bottom: 5px;

    font-size: 16px;
    color: white;
  }

  &__absence {
    width: fit-content;
    font-size: 18px;
    color: #70757a;
    margin: 0 auto;
  }

  &__main {
    padding-top: 30px;
  }
}
</style>
