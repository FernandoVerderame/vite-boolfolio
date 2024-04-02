<script>
import AppHeader from './components/AppHeader.vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default {
  name: 'Boolfolio',
  components: { AppHeader }
}
</script>

<template>

  <AppHeader />

  <main class="container">

    <RouterView />

  </main>

</template>

<style></style>