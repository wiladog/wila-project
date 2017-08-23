const routes = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['../views/index.vue'], resolve)
}];
export default routes;