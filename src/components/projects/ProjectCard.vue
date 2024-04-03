<script>
export default {
    name: 'ProjectCard',

    props: {
        project: Object,
        isDetail: Boolean
    },

    computed: {
        abstract() {
            const abstract = this.project.description.slice(0, 200);
            return abstract + '...';
        },

        pubblicationDate() {
            const date = new Date(this.project.created_at);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return `${day}/${month}/${year} at ${hours}:${minutes}`;
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card m-5">
            <img v-if="project.image" :src="project.image" :alt="project.title" class="card-img-top"
                style="height: 100px;">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <div v-if="project.type" class="badge mb-2" :style="{ backgroundColor: project.type.color }">{{
                project.type.label }}
                </div>
                <p class="card-text">{{ isDetail ? project.description : abstract }}</p>
                <ul v-if="project.technologies?.length">
                    <li v-for="technology in project.technologies" :key="technology.id"
                        :style="{ color: technology.color }">
                        <i :class="`${technology.icon}`">{{ technology.label }}</i>
                    </li>
                </ul>
                <div>Created on {{ pubblicationDate }}</div>
                <RouterLink v-if="!isDetail" :to="{ name: 'project-detail', params: { slug: project.slug } }"
                    class="btn btn-sm btn-primary">
                    Show</RouterLink>
            </div>
        </div>
    </div>
</template>

<style>
ul {
    list-style: none;
    margin-bottom: 10px;
    padding: 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}
</style>