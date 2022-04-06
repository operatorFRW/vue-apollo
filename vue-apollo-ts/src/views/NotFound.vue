<template>
  <div class="NotFound">
    <img
      class="NotFound__img"
      :src="require('@/assets/notFound.png')"
      alt="404"
    />
    <router-link class="NotFound__link" to="/"
      >Вернуться на главную</router-link
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "NotFound",
});
</script>

<style lang="scss" scoped>
.NotFound {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  &__img {
    width: 200px;
    height: 200px;
  }

  &__link {
    animation: 2s link infinite;
  }

  @keyframes link {
    from {
      color: blue;
    }
    50% {
      color: red;
    }
    to {
      color: green;
    }
  }
}
</style>
