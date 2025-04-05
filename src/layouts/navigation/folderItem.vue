<script lang="ts" setup>
import type { ItemProps } from './props';
import { useProjectElements } from '@/app/stores/projectElements';
import { computed, ref } from 'vue';
import * as Types from '@/shared/types';
import pageItem from './pageItem.vue';
import folderItem from './folderItem.vue';
import { Helper } from '@/shared/helpers';

const props = defineProps<ItemProps>();
const projectElements = useProjectElements();

const getTitle = computed(() => getElement.value?.name ?? 'Нет');

const getElement = computed(() => projectElements.getElements[props.itemId]);

const getElementById = computed(
    () => (id: string) => projectElements.getElements[id]
);

const { isActive, handleMouseEnter, handleMouseLeave } =
    Helper.ComponentsAPI.mouseOverHandler(0);

const activeRename = ref(false);
</script>

<template>
    <template v-if="getElement.type === Types.Project.ElementTypes.FOLDER">
        <template v-if="!getElement.items?.length">
            <v-list-item
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
            >
                <template #prepend>
                    <div class="mr-2">
                        <v-icon>mdi-folder-outline</v-icon>
                    </div>
                </template>
                <template #append>
                    <template v-if="isActive && !activeRename">
                        <VBtn
                            v-bind="props"
                            :size="$STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE"
                            variant="text"
                        >
                            <v-icon>mdi-plus</v-icon>
                        </VBtn>

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
                <template #title>
                    <template v-if="!activeRename">
                        <span class="font-xs no-select">{{ getTitle }} </span>
                    </template>
                    <template v-else>
                        <input v-model="getElement.name" />
                    </template>
                </template>
            </v-list-item>
        </template>
        <template v-else>
            <v-list-group :value="itemId">
                <template #activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        @mouseenter="handleMouseEnter"
                        @mouseleave="handleMouseLeave"
                    >
                        <template #prepend>
                            <div class="mr-2">
                                <v-icon>mdi-folder-outline</v-icon>
                            </div>
                        </template>
                        <template #append>
                            <template v-if="isActive && !activeRename">
                                <VBtn
                                    v-bind="props"
                                    :size="
                                        $STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE
                                    "
                                    variant="text"
                                >
                                    <v-icon>mdi-plus</v-icon>
                                </VBtn>

                                <VBtn
                                    v-bind="props"
                                    :size="
                                        $STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE
                                    "
                                    variant="text"
                                    @click.stop="activeRename = true"
                                >
                                    <v-icon>mdi-rename-outline</v-icon>
                                </VBtn>

                                <VBtn
                                    v-bind="props"
                                    :size="
                                        $STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE
                                    "
                                    variant="text"
                                >
                                    <v-icon>mdi-delete</v-icon>
                                </VBtn>
                            </template>

                            <template v-if="activeRename">
                                <VBtn
                                    v-bind="props"
                                    :size="
                                        $STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE
                                    "
                                    variant="text"
                                    @click.stop="activeRename = false"
                                >
                                    <v-icon>mdi-check</v-icon>
                                </VBtn>

                                <VBtn
                                    v-bind="props"
                                    :size="
                                        $STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE
                                    "
                                    variant="text"
                                    @click.stop="activeRename = false"
                                >
                                    <v-icon>mdi-close</v-icon>
                                </VBtn>
                            </template>
                        </template>
                        <template #title>
                            <template v-if="!activeRename">
                                <span class="font-xs no-select"
                                    >{{ getTitle }}
                                </span>
                            </template>
                            <template v-else>
                                <input v-model="getElement.name" />
                            </template>
                        </template>
                    </v-list-item>
                </template>
                <template #default>
                    <template v-for="element in getElement.items_generic_list">
                        <template
                            v-if="
                                getElementById(element)?.type ==
                                Types.Project.ElementTypes.PAGE
                            "
                        >
                            <page-item :item-id="element"></page-item>
                        </template>
                        <template
                            v-if="
                                getElementById(element)?.type ==
                                Types.Project.ElementTypes.FOLDER
                            "
                        >
                            <folderItem :item-id="element"></folderItem>
                        </template>
                    </template>
                </template>
            </v-list-group>
        </template>
    </template>
</template>
