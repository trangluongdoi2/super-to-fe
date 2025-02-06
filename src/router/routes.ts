import PageNotFound from '@/router/PageNotFound.vue';
import Dashboard from '@/views/Dashboard.vue';
import EmptyRouterView from './EmptyRouterView.vue';

export const routes: any[] = [
  {
    name: 'app',
    path: '/',
    component: EmptyRouterView,
    redirect: () => {
      return { name: 'main' };
    },
    children: [
      {
        name: 'main',
        path: '',
        component: Dashboard,
      },
    ],
  },
  {
    name: 'index',
    path: '/',
    redirect: () => {
      return { name: 'app' };
    },
  },
];
