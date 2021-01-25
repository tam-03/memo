import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import New from './components/New.vue';
import Edit from './components/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: 'memo/new', component: New },
        { path: 'memo/:id', component: Edit, props: true }
      ]
    },
    {
      path: '*', redirect: '/'
    }
  ]
});
