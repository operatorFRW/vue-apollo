<template>
  <div class="CardCountry global-card">
    <img
      class="CardCountry__img"
      v-lazy="{
        src: country.country_logo || require('@/assets/noImage.jpg'),
        loading: require('@/assets/load.svg'),
        error: require('@/assets/noImage.jpg')
      }"
      :alt="country.country_name"
    />
    <span class="CardCountry__name">{{ country.country_name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.CardCountry {
  &__img {
    width: 80px;
    height: 60px;

    object-fit: cover;
    margin-right: 10px;
  }

  &__name {
    word-break: break-all;
  }
}
</style>
