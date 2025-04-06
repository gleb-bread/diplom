<script lang="ts" setup>
import { useModalsStore } from '@/app/stores/modals';

const modalsStore = useModalsStore();

const openModal = function () {
    modalsStore.setInstant('createProject', true);
};
</script>

<template>
    <!-- Add Project Card -->
    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
            @click.stop="openModal"
            elevation="2"
            class="add-project-card"
            color="grey lighten-2"
        >
            <v-card-text class="text-center">
                <v-icon size="48" color="white darken-2"> mdi-plus</v-icon>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<style scoped>
.add-project-card {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.add-project-card:hover {
    background-color: #e0e0e0; /* Slight hover effect */
}

@media (max-width: 600px) {
    .add-project-card {
        display: none; /* Hide the card version on mobile */
    }
}
</style>
