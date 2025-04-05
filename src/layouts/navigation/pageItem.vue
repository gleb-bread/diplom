<script lang="ts" setup>
import type { ItemProps } from './props';
import { useProjectElements } from '@/app/stores/projectElements';
import { computed, ref } from 'vue';
import { Helper } from '@/shared/helpers';

const props = defineProps<ItemProps>();
const projectElements = useProjectElements();

const getTitle = computed(
    () => (idPage: string) => projectElements.getElements[idPage].name
);

const getElement = computed(() => projectElements.getElements[props.itemId]);

const { isActive, handleMouseEnter, handleMouseLeave } =
    Helper.ComponentsAPI.mouseOverHandler(0);

const activeRename = ref(false);
</script>

<template>
    <v-list-item @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <template #prepend>
            <div class="mr-2">
                <v-icon>mdi-list-box-outline</v-icon>
            </div>
        </template>
        <template #title>
            <template v-if="!activeRename">
                <span class="font-xs no-select">{{ getTitle(itemId) }} </span>
            </template>
            <template v-else>
                <input v-model="getElement.name" />
            </template>
        </template>
        <template #append>
            <template v-if="isActive && !activeRename">
                <VBtn
                    v-bind="props"
                    :size="$STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE"
                    variant="text"
                    @click.stop="activeRename = true"
                >
                    <v-icon>mdi-rename-outline</v-icon>
                </VBtn>

                <VBtn
                    v-bind="props"
                    :size="$STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE"
                    variant="text"
                >
                    <v-icon>mdi-delete</v-icon>
                </VBtn>
            </template>

            <template v-if="activeRename">
                <VBtn
                    v-bind="props"
                    :size="$STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE"
                    variant="text"
                    @click.stop="activeRename = false"
                >
                    <v-icon>mdi-check</v-icon>
                </VBtn>

                <VBtn
                    v-bind="props"
                    :size="$STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE"
                    variant="text"
                    @click.stop="activeRename = false"
                >
                    <v-icon>mdi-close</v-icon>
                </VBtn>
            </template>
        </template>
    </v-list-item>
</template>
