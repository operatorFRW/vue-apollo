<template>
  <div class="LeaguePage">
    <LayoutHeader>
      <ul class="LeaguePage__listTabs">
        <li class="LeaguePage__Tab" role="button">
          <router-link
            to="table"
            class="LeaguePage__link"
            active-class="LeaguePage__link--active"
            >Список команд</router-link
          >
        </li>
        <li class="LeaguePage__Tab" role="button">
          <router-link
            to="matches"
            class="LeaguePage__link"
            active-class="LeaguePage__link--active"
            >Матчи</router-link
          >
        </li>
        <li class="LeaguePage__Tab" role="button">
          <router-link
            to="scorers"
            class="LeaguePage__link"
            active-class="LeaguePage__link--active"
            >Лучшие бомбардиры</router-link
          >
        </li>
      </ul>
    </LayoutHeader>
    <main class="LeaguePage__main">
      <div class="global-container">
        <router-view v-slot="{ Component }">
          <keep-alive include="ResultMatchesLeague">
            <component :is="Component" :id="id"></component>
          </keep-alive>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRouter } from "vue-router";

import LayoutHeader from "@/layouts/LayoutHeader.vue";

export default defineComponent({
  name: "LeaguePage",
  components: {
    LayoutHeader,
  },
  setup() {
    const route = useRouter();

    const nameComponent = ref("TableTeams");

    return {
      id: computed(() => route.currentRoute.value.params?.leagueID),
      nameComponent,
    };
  },
});
</script>

<style lang="scss">
.LeaguePage {
  &__listTabs {
    display: flex;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    border-bottom: 4px solid transparent;
    margin-right: 10px;
    cursor: pointer;

    color: white;
    font-size: 20px;
    font-weight: 500;

    &--active {
      background-color: rgba(0, 0, 0, 0.1);
      border-bottom-color: white;
      font-weight: 600;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    &:last-child {
      margin-right: 0;
    }
  }
  &__main {
    padding: 30px 0;
  }
}
</style>
