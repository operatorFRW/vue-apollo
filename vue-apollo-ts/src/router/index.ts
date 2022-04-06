import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Countries from "@/views/CountriesPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Countries",
    component: Countries,
  },
  {
    path: "/country/:id",
    name: "Country",
    component: () =>
      import(/* webpackChunkName: "country" */ "@/views/CountryPage.vue"),
  },
  {
    path: "/country",
    redirect: "/",
  },
  {
    path: "/league",
    name: "League",
    component: () =>
      import(/* webpackChunkName: "league" */ "@/views/LeaguePage.vue"),
    children: [
      {
        path: ":leagueID/table",
        name: "TableTeams",
        component: () =>
          import(
            /* webpackChunkName: "TableTeams" */ "@/components/TableTeams.vue"
          ),
      },
      {
        path: ":leagueID/scorers",
        name: "TableTopScorers",
        component: () =>
          import(
            /* webpackChunkName: "TableTopScorers" */ "@/components/TableTopScorers.vue"
          ),
      },
      {
        path: ":leagueID/matches",
        name: "ResultMatchesLeague",
        component: () =>
          import(
            /* webpackChunkName: "ResultMatchesLeague" */ "@/components/ResultMatchesLeague.vue"
          ),
      },
    ],
  },
  {
    path: "/league/:leagueID",
    redirect: "/",
  },
  {
    path: "/:url(.*)",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
