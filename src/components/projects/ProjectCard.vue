<script>
export default {
    name: 'ProjectCard',

    props: {
        project: Object,
        isDetail: Boolean
    },

    computed: {
        abstract() {
            const abstract = this.project.description.slice(0, 100);
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

                <!-- Type -->
                <RouterLink v-if="project.type" :to="{ name: 'type-projects', params: { slug: project.type.slug } }">
                    <div v-if="project.type" class="badge mb-2" :style="{ backgroundColor: project.type.color }">
                        {{ project.type.label }}
                    </div>
                </RouterLink>
                <p class="card-text">{{ isDetail ? project.description : abstract }}</p>

                <!-- Technology -->
                <ul v-if="project.technologies?.length">
                    <RouterLink v-for="technology in project.technologies" :key="technology.id"
                        :to="{ name: 'technology-projects', params: { slug: technology.slug } }">
                        <li :style="{ color: technology.color }">
                            <FontAwesomeIcon :icon="`${technology.icon}`" class="h3 mb-0" />
                        </li>
                    </RouterLink>
                </ul>
                <div>Created on {{ pubblicationDate }}</div>
                <RouterLink v-if="!isDetail" :to="{ name: 'project-detail', params: { slug: project.slug } }"
                    class="btn btn-sm btn-primary">
                    Show</RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;
    margin: 20px 0;
    padding: 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
</style>