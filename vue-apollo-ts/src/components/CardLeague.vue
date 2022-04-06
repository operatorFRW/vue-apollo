<template>
  <div class="CardLeague global-card">
    <img
      class="CardLeague__img"
      v-lazy="{
        src: competition.league_logo || require('@/assets/noImage.jpg'),
        loading: require('@/assets/load.svg'),
        error: require('@/assets/noImage.jpg')
      }"
      :alt="competition.league_name"
    />
    <span class="CardLeague__name">{{ competition.league_name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    competition: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.CardLeague {
  &__img {
    width: 120px;
    height: 100px;

    object-fit: scale-down;
  }
}
</style>
