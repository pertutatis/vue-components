/* global process */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import InlineComponent from './views/inline-component.vue';
import GlobalComponent from './views/global-component.vue';
import LocalComponent from './views/local-component.vue';
import partsComponent from './views/parts.vue';
import VmodelComponent from './views/vmodel.vue';
import slotsComponent from './views/slots.vue';
import dynamicComponent from './views/dynamic.vue';
import exampleComponent from './views/example.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/inline-component',
            name: 'inline-component',
            component: InlineComponent
        },
        {
            path: '/global-component',
            name: 'global-component',
            component: GlobalComponent
        },
        {
            path: '/local-component',
            name: 'local-component',
            component: LocalComponent
        },
        {
            path: '/parts-of-a-component',
            name: 'parts',
            component: partsComponent
        },
        {
            path: '/v-model',
            name: 'v-model',
            component: VmodelComponent
        },
        {
            path: '/slots',
            name: 'slots',
            component: slotsComponent
        },
        {
            path: '/dynamic-components',
            name: 'dynamic',
            component: dynamicComponent
        },
        {
            path: '/example',
            name: 'example',
            component: exampleComponent
        }
    ]
});
