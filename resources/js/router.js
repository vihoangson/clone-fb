import Vue from 'vue';
import VueRouter from 'vue-route';
import Start from './views/Start';

Vue.use(VueRouter);
export default new VueRouter(
    {
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: Start
            }
        ]
    }
);
