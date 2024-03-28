<script>
export default {
    name: 'ProjectsList',

    props: {
        projects: Array
    }
};
</script>

<template>
    <section id="projects-list">
        <ul v-if="projects.length">
            <li v-for="project in projects" :key="project.id">
                <h4>{{ project.title }}</h4>
            </li>
        </ul>
        <h4 v-else>There aren't any projects.</h4>
    </section>
</template>

<style></style>