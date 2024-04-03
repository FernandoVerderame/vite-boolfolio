<script>
import axios from 'axios';
import { store } from '../data/store';
const baseUri = 'http://localhost:8000/api';
import ProjectsList from '../components/projects/ProjectsList.vue';

export default {
    name: 'TechnologyProjectsPage',

    components: { ProjectsList },

    data: () => ({
        projects: [],
        technologyLabel: '',
        store
    }),

    methods: {
        fetchProjects() {
            store.isLoading = true;

            axios.get(`${baseUri}/technologies/${this.$route.params.slug}/projects/`)
                .then(res => {
                    const { projects, label } = res.data;
                    this.projects = projects;
                    this.technologyLabel = label;
                })
                .catch(err => {
                    console.error(err.message);
                    this.$router.push({ name: 'not-found' });
                })
                .then(() => {
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

    <div v-show="!store.isLoading">
        <h2 class="mt-5 text-center">Projects with {{ technologyLabel }} Technology</h2>
        <ProjectsList :projects="projects" />
    </div>

</template>

<style></style>