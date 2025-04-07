<script lang="ts" setup>
import { useProjectStore } from '@/app/stores/project';
import { computed } from 'vue';
import { Helper } from '@/shared/helpers';
import { Env } from '@/shared/env';
import * as Models from '@/entities/models';
import { useRouter } from 'vue-router';

const projectStore = useProjectStore();
const router = useRouter();

const getProjects = computed(() => Object.values(projectStore.getProjects));

const openProject = function (project: Models.Project) {
    Helper.CookieAPI.setCookie(Env.Cookie.project, String(project.id), 14, {
        path: '/',
        sameSite: 'Strict',
    });

    Helper.RouterAPI.redirect(router, 'PAGE');
};
</script>

<template>
    <v-menu>
        <template #activator="{ props }">
            <v-list-item v-bind="props" class="px-6"> Проекты </v-list-item>
        </template>

        <NavigatorCard>
            <NavigatorList>
                <template v-for="project in getProjects">
                    <v-list-item
                        class="font-xs"
                        @click.stop="openProject(project)"
                    >
                        <template #title>
                            <span class="font-xs">{{ project.name }}</span>
                        </template>
                    </v-list-item>
                </template>
            </NavigatorList>
        </NavigatorCard>
    </v-menu>
</template>
