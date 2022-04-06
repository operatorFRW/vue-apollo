<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
.input-global {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
}

.global-container {
  padding: 0 16px;
}

.global-card {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 20px;

  &:hover {
    background: rgb(147, 147, 243);
    color: white;
  }
}

.el-loading-spinner {
  position: fixed !important;
  top: 50% !important;
  left: 50%;
  margin: 0 !important;
  transform: translate(-50%, -50%) !important;
}

.el-loading-mask {
  z-index: 50 !important;
}
</style>
