<template>
    <div class="root">
        <sidebar></sidebar>
        <div class="layout-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Sidebar from "../components/Sidebar";
    export default {
        name: "ComponentLayout",
        components: {Sidebar}
    }
</script>

<style scoped >

    .root {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-template-rows: 1fr;
    }

    .layout-content {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>