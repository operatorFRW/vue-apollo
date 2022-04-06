import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import App from "./App.vue";
import router from "./router";
import apolloClient from "./client";
import ElementPlus from "element-plus";
import VueLazyLoad from 'vue3-lazyload'
import "element-plus/dist/index.css";
import "./assets/style/reset.scss";

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
})
  .use(router)
  .use(ElementPlus)
  .use(VueLazyLoad)
  .mount("#app");
