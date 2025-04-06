<script lang="ts" setup>
import { ref } from 'vue';
import { Helper } from '@/shared/helpers';
import { useRouter } from 'vue-router';

const route = useRouter();

const listUserMenu = [
    {
        title: 'Проекты',
        href: () => Helper.RouterAPI.redirect(route, 'PROJECTS'),
        icon: 'mdi-archive-outline',
    },
    {
        title: 'Изменить данные',
        href: () => Helper.RouterAPI.redirect(route, 'USER'),
        icon: 'mdi-pen',
    },
];
</script>

<template>
    <v-menu>
        <template #activator="{ props }">
            <v-btn v-bind="props" size="30" variant="text">
                <VIcon>mdi-account</VIcon>
            </v-btn>
        </template>

        <NavigatorCard>
            <NavigatorList>
                <template v-for="listItem in listUserMenu">
                    <v-list-item class="font-xs" @click.stop="listItem.href()">
                        <template #prepend>
                            <VIcon>{{ listItem.icon }}</VIcon>
                        </template>

                        <template #title>
                            <span class="font-xs">{{ listItem.title }}</span>
                        </template>
                    </v-list-item>
                </template>
            </NavigatorList>
        </NavigatorCard>
    </v-menu>
</template>
