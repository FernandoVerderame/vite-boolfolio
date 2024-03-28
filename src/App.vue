<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
  name: 'Boolfolio',

  data: () => ({ projects: [] }),

  components: { AppHeader },

  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => {
        console.log(res.data);

        this.projects = res.data;
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

    <ul>
      <li v-for="project in projects" :key="project.id">
        <h4>{{ project.title }}</h4>
      </li>
    </ul>

  </main>

</template>

<style></style>