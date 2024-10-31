<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import defaultLayout from './layouts/defaultLayout.vue';
import pageLayout from './layouts/pageLayout.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const router = useRoute();

const getLayout = computed(() =>
    router.meta.layout === 'page' ? pageLayout : defaultLayout
);
</script>

<template>
    <component :is="getLayout">
        <template #main>
            <RouterView />
        </template>
    </component>
</template>

<style scoped></style>
