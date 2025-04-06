<script lang="ts" setup>
import { computed } from 'vue';
import type { Props } from './props';
import { useProjectStore } from '@/app/stores/project';
import { Helper } from '@/shared/helpers';
import { useRouter } from 'vue-router';
import { Env } from '@/shared/env';
import { useModalsStore } from '@/app/stores/modals';

const props = defineProps<Props>();
const router = useRouter();
const projectStore = useProjectStore();
const modalsStore = useModalsStore();

const getPropject = computed(() => projectStore.getProjects[props.projectId]);

const openProject = function () {
    Helper.CookieAPI.setCookie(
        Env.Cookie.project,
        String(getPropject.value.id),
        14,
        {
            path: '/',
            sameSite: 'Strict',
        }
    );

    Helper.RouterAPI.redirect(router, 'PAGE');
};

const openChangeProjectModal = function () {
    projectStore.setSelectProject(props.projectId);
    modalsStore.setInstant('changeProject', true);
};
</script>

<template>
    <v-card
        elevation="2"
        class="project-card"
        :color="$STYLE_VARIBLES.COLOR.WHITE"
    >
        <v-card-title>
            <div class="d-flex justify-space-between align-center">
                <div>{{ getPropject?.name }}</div>
                <VBtn
                    @click.stop="openChangeProjectModal"
                    :size="40"
                    variant="text"
                >
                    <VIcon>mdi-cog</VIcon>
                </VBtn>
            </div>
        </v-card-title>
        <v-card-subtitle v-if="getPropject">
            Дата создания:
            {{ Helper.DateAPI.dateFormat(getPropject.created_at) }}
        </v-card-subtitle>
        <v-card-text>
            <!-- <p>{{ getPropject.private ? 'Приватный' : 'Публичный' }}</p> -->
            <p>{{ getPropject.archive ? 'Архивный' : 'Активный' }}</p>
        </v-card-text>
        <v-card-actions>
            <v-btn @click.stop="openProject" text="Открыть" />
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.project-card {
    height: 100%; /* Ensure all cards are the same height */
}
</style>
