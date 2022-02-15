import Home from '@/views/Home.vue';
import Home2 from '@/views/Home2.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        name: 'Home2',
        component: Home2
    }
];
export default routes;
