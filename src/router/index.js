// Import vue router functions
import { createRouter, createWebHistory } from 'vue-router';

// Import pages
import HomePage from '../pages/HomePage.vue';
import ContactUsPage from '../pages/ContactUsPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';

// Define routes

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            name: 'home'
        },
        {
            path: '/projects/:id',
            component: ProjectDetailPage,
            name: 'project-detail'
        },
        {
            path: '/contact-us',
            component: ContactUsPage,
            name: 'contact-us'
        },
        {
            path: '/not-found',
            component: NotFoundPage,
            name: 'not-found'
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: 'not-found'
        }
    ]
});

export { router }