<script>
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
import { store } from './data/store';

export default {
  name: 'Boolfolio',

  data: () => ({
    store
  }),

  components: { AppHeader, AppLoader }
}
</script>

<template>

  <AppHeader />

  <main class="container">

    <AppLoader v-if="store.isLoading" />

    <RouterView />

  </main>

</template>

<style></style>