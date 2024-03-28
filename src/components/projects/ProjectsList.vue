<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'ProjectsList',

    components: { ProjectCard },

    props: {
        projects: Array
    }
};
</script>

<template>
    <section id="projects-list">
        <div v-if="projects.length" class="row row-cols-3">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <h4 v-else>There aren't any projects.</h4>
    </section>
</template>

<style></style>