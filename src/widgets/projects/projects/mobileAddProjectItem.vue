<script lang="ts" setup>
import { useModalsStore } from '@/app/stores/modals';

const modalsStore = useModalsStore();

const openModal = function () {
    modalsStore.setInstant('createProject', true);
};
</script>

<template>
    <v-btn
        @click.stop="openModal"
        class="mobile-add-btn"
        color="primary"
        fab
        fixed
        bottom
        right
    >
        <v-icon>mdi-plus</v-icon>
    </v-btn>
</template>

<style scoped>
/* Hide mobile button on larger screens */
.mobile-add-btn {
    display: none;
}

/* Media query for mobile screens */
@media (max-width: 600px) {
    .mobile-add-btn {
        display: block;
    }
}
</style>
