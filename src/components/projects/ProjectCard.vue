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
                <p class="card-text">{{ isDetail ? project.description : abstract }}</p>
                <div>Created on {{ pubblicationDate }}</div>
                <RouterLink v-if="!isDetail" :to="{ name: 'project-detail', params: { id: project.id } }"
                    class="btn btn-sm btn-primary">
                    Show</RouterLink>
            </div>
        </div>
    </div>
</template>

<style></style>