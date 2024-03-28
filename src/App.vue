<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import AppAlert from './components/AppAlert.vue';
import BasePagination from './components/BasePagination.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default {
  name: 'Boolfolio',

  data: () => ({
    projects: {
      data: [],
      links: []
    },
    isLoading: false,
    isAlertOpen: false
  }),

  components: { AppHeader, ProjectsList, AppAlert, BasePagination },

  methods: {
    fetchProjects(endpoint) {
      this.isLoading = true;
      axios.get(endpoint ?? defaultEndpoint)
        .then(res => {
          const { data, links } = res.data;

          this.projects = { data, links };
          this.isAlertOpen = false;
        }).catch(err => {
          console.error(err);
          this.isAlertOpen = true;
        }).then(() => {
          this.isLoading = false;
        })
    }
  },

  created() {
    this.fetchProjects();
  }
}
</script>

<template>

  <AppHeader />

  <main class="container pt-4">
    <h1>Boolfolio</h1>

    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" @retry="fetchProjects" />

    <AppLoader v-if="isLoading" />

    <div v-else>
      <ProjectsList :projects="projects.data" />
      <BasePagination :links="projects.links" @change-page="fetchProjects" />
    </div>

  </main>

</template>

<style></style>