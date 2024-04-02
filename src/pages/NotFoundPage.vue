<script>
export default {
    name: 'NotFoundPage'
}
</script>

<template>
    <div class="not-found">
        <h3>404 | Page Not Found</h3>
    </div>
</template>

<style lang="scss" scoped>
.not-found {
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        color: white;
        text-align: center;
    }
}
</style>