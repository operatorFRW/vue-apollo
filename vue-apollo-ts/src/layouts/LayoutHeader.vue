<template>
  <header class="header">
    <div class="global-container">
      <slot></slot>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "LayoutHeader",
});
</script>

<style lang="scss">
.header {
  background: rgb(177, 40, 41);
  padding: 15px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0%;
  z-index: 1000;
  color: white;
}
</style>
