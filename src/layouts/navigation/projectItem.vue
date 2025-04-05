<script lang="ts" setup>
import type { ProjectProps } from './props';
import { useProjectStore } from '@/app/stores/project';
import { computed, ref } from 'vue';
import { Helper } from '@/shared/helpers';

const projectStore = useProjectStore();
const getTitle = computed(() => projectStore.getProject?.name);

const {
    isActive,
    handleMenuMouseEnter,
    handleMenuMouseLeave,
    handleMouseEnter,
    handleMouseLeave,
} = Helper.ComponentsAPI.mouseOverHandler();
</script>

<template>
    <v-list-item @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <template #prepend>
            <div class="mr-2">
                <v-icon>mdi-archive-outline</v-icon>
            </div>
        </template>
        <template #append>
            <template v-if="isActive">
                <v-menu
                    @mouseenter="handleMenuMouseEnter"
                    @mouseleave="handleMenuMouseLeave"
                >
                    <template #activator="{ props }">
                        <VBtn
                            v-bind="props"
                            :size="$STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE"
                            variant="text"
                        >
                            <VIcon>mdi-plus</VIcon>
                        </VBtn>
                    </template>

                    <NavigatorCard :elevation="1">
                        <NavigatorList>
                            <v-list-item>
                                <template #prepend>
                                    <div class="mr-2">
                                        <v-icon>mdi-list-box-outline</v-icon>
                                    </div>
                                </template>
                                <template #title>
                                    <div class="font-xs">Создать страницу</div>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template #prepend>
                                    <div class="mr-2">
                                        <v-icon>mdi-folder-outline</v-icon>
                                    </div>
                                </template>
                                <template #title>
                                    <div class="font-xs">Создать папку</div>
                                </template>
                            </v-list-item>
                        </NavigatorList>
                    </NavigatorCard>
                </v-menu>
            </template>
        </template>
        <template #title>
            <span class="font-xs no-select">{{ getTitle }} </span>
        </template>
    </v-list-item>
</template>
