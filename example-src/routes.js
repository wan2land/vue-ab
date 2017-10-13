
export default [
  { path: '/', component: require("./pages/index.vue").default, meta: {title: "Simple Example", } },
  { path: '/weight', component: require("./pages/weight.vue").default, meta: {title: "Weight Example", } },
  { path: '/event', component: require("./pages/event.vue").default, meta: {title: "Event Example", } },
];
