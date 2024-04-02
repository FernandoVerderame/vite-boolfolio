<script>
import { store } from '../data/store';
import ProjectsList from '../components/projects/ProjectsList.vue';
import AppAlert from '../components/AppAlert.vue';
import BasePagination from '../components/BasePagination.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'HomePage',

    data: () => ({
        store,
        projects: {
            data: [],
            links: []
        },
        isAlertOpen: false
    }),

    components: { ProjectsList, AppAlert, BasePagination },

    methods: {
        fetchProjects(endpoint) {
            store.isLoading = true;
            axios.get(endpoint ?? defaultEndpoint)
                .then(res => {
                    const { data, links } = res.data;

                    this.projects = { data, links };
                    this.isAlertOpen = false;
                }).catch(err => {
                    console.error(err);
                    this.isAlertOpen = true;
                }).then(() => {
                    store.isLoading = false;
                })
        }
    },

    created() {
        this.fetchProjects();
    }
}
</script>

<template>

    <h1>Boolfolio</h1>

    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" @retry="fetchProjects" />

    <div v-if="!store.isLoading">
        <ProjectsList :projects="projects.data" />
        <BasePagination :links="projects.links" @change-page="fetchProjects" />
    </div>

</template>

<style></style>