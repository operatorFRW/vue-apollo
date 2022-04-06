<template>
  <div class="ResultMatchesLeague">
    <el-date-picker
      class="ResultMatchesLeague__datePicker"
      v-model="dateFromTo"
      format="YYYY-MM-DD"
      value-format="YYYY-MM-DD"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
    />
    <div v-loading="loading">
      <template v-if="!error && matches?.length">
        <ul class="ResultMatchesLeague__list">
          <li
            class="ResultMatchesLeague__item"
            v-for="match in matches"
            :key="match.match_id"
          >
            <CardMatch :match="match" />
          </li>
        </ul>
      </template>
      <div v-else class="ResultMatchesLeague__absence">Нет данных</div>
    </div>
    <el-button
      type="primary"
      class="ResultMatchesLeague__buttonScroll"
      :icon="Top"
      @click="scrollToTop"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import moment from "moment";
import { useRouter } from "vue-router";

import { GET_RESULT_MATCHES } from "@/graphql/query/index";
import { QueryGetResultMatchesArgs, Query } from "@/graphql/types";
import { Top } from "@element-plus/icons-vue";

import CardMatch from "@/components/CardMatch.vue";

export default defineComponent({
  name: "ResultMatchesLeague",
  components: {
    CardMatch,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  setup(props) {
    const router = useRouter();
    let { from: fromDate = "", to: toDate = "" } = router.currentRoute.value
      .query as {
      from?: string;
      to?: string;
    };

    if (
      !(
        moment(fromDate, "YYYY-MM-DD").isValid() &&
        moment(toDate, "YYYY-MM-DD").isValid()
      )
    ) {
      fromDate = moment().format("YYYY-MM-DD");
      toDate = moment()
        .set("month", moment().month() + 1)
        .format("YYYY-MM-DD");
    }

    const dateFromTo = ref([fromDate, toDate]);

    function setQueryParam() {
      router.replace({
        query: { from: dateFromTo.value[0], to: dateFromTo.value[1] },
      });
    }

    setQueryParam();

    const { result, error, refetch, loading } = useQuery<
      Query,
      Required<QueryGetResultMatchesArgs>
    >(GET_RESULT_MATCHES, {
      id: props.id,
      from: fromDate,
      to: toDate,
    });

    watch(dateFromTo, async (newVal, oldVal) => {
      loading.value = true;
      setQueryParam();
      await refetch({
        from: dateFromTo.value[0],
        to: dateFromTo.value[1],
        id: props.id,
      });
      loading.value = false;
    });

    return {
      dateFromTo,
      matches: computed(() => result.value?.getResultMatches),
      loading,
      error,
      setQueryParam,
      Top,
    };
  },
  activated() {
    this.setQueryParam();
  },
});
</script>

<style lang="scss">
.ResultMatchesLeague {
  &__datePicker.el-date-editor {
    margin: 0 auto;
    display: flex;

    & .el-range__close-icon {
      display: none;
    }
  }
}
</style>

<style scoped lang="scss">
.ResultMatchesLeague {
  &__list {
    padding-top: 30px;
    gap: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__absence {
    width: fit-content;
    font-size: 18px;
    color: #70757a;
    margin: 0 auto;
    padding-top: 30px;
  }

  &__buttonScroll {
    position: fixed;
    right: 5%;
    bottom: 5%;
  }
}
</style>
