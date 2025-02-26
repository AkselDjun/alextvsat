const routes = [
  {
    path: ["/"],
    exact: true,
    component: "Home",
  },
  {
    path: ["*"],
    component: "Home",
  },
];

export default routes;
