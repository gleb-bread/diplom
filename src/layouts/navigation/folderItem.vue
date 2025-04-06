<script lang="ts" setup>
import type { ItemProps } from './props';
import { useProjectElements } from '@/app/stores/projectElements';
import { computed, ref, defineComponent } from 'vue';
import * as Types from '@/shared/types';
import pageItem from './pageItem.vue';
import folderItem from './folderItem.vue';
import { Helper } from '@/shared/helpers';
import { Actions } from '@/shared/actions';
import { Config } from '@/shared/config';
import { Handlers } from '@/shared/handlers';

const nameComponent = 'folderItem';

defineComponent({ name: nameComponent });

const config = new Config.Actions.Config(nameComponent);

const props = defineProps<ItemProps>();
const projectElements = useProjectElements();

const handlerCreatePageElement = new Handlers.CreateNewProjectElement(
    Types.Project.ElementTypes.PAGE,
    props.itemId
);

const handlerCreateFolderElement = new Handlers.CreateNewProjectElement(
    Types.Project.ElementTypes.FOLDER,
    props.itemId
);

const newName = ref('');

const getTitle = computed(() => getElement.value?.name ?? 'Нет');

const getElement = computed(() => projectElements.getElements[props.itemId]);

const getElementById = computed(
    () => (id: string) => projectElements.getElements[id]
);

const {
    isActive,
    handleMouseEnter,
    handleMouseLeave,
    handleMenuMouseEnter,
    handleMenuMouseLeave,
} = Helper.ComponentsAPI.mouseOverHandler(0);

const renameMode = ref(false);

const activeRename = computed({
    get() {
        return renameMode.value;
    },
    set(v: boolean) {
        if (v) newName.value = getElement.value.name;
        renameMode.value = v;
    },
});

const handlerUpdateProjectElement = () => {
    activeRename.value = false;
    getElement.value.name = newName.value;
    return new Handlers.UpdateProjectElement(getElement.value);
};

const handlerDeleteProjectElement = new Handlers.DeleteProjectElement(
    getElement.value
);
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
                        <v-menu
                            @mouseenter="handleMenuMouseEnter"
                            @mouseleave="handleMenuMouseLeave"
                        >
                            <template #activator="{ props }">
                                <VBtn
                                    v-bind="props"
                                    :size="
                                        $STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE
                                    "
                                    variant="text"
                                >
                                    <VIcon>mdi-plus</VIcon>
                                </VBtn>
                            </template>

                            <NavigatorCard :elevation="1">
                                <NavigatorList>
                                    <v-list-item
                                        @click.stop="
                                            $ACTION_MANAGER.pushAction(
                                                new Actions.Click.ClickAction(
                                                    <any>$event,
                                                    config,
                                                    handlerCreatePageElement
                                                )
                                            )
                                        "
                                    >
                                        <template #prepend>
                                            <div class="mr-2">
                                                <v-icon
                                                    >mdi-list-box-outline</v-icon
                                                >
                                            </div>
                                        </template>
                                        <template #title>
                                            <div class="font-xs">
                                                Создать страницу
                                            </div>
                                        </template>
                                    </v-list-item>
                                    <v-list-item
                                        @click.stop="
                                            $ACTION_MANAGER.pushAction(
                                                new Actions.Click.ClickAction(
                                                    <any>$event,
                                                    config,
                                                    handlerCreateFolderElement
                                                )
                                            )
                                        "
                                    >
                                        <template #prepend>
                                            <div class="mr-2">
                                                <v-icon
                                                    >mdi-folder-outline</v-icon
                                                >
                                            </div>
                                        </template>
                                        <template #title>
                                            <div class="font-xs">
                                                Создать папку
                                            </div>
                                        </template>
                                    </v-list-item>
                                </NavigatorList>
                            </NavigatorCard>
                        </v-menu>

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
                            @click.stop="
                                $ACTION_MANAGER.pushAction(
                                    new Actions.Click.ClickAction(
                                        <any>$event,
                                        config,
                                        handlerDeleteProjectElement
                                    )
                                )
                            "
                        >
                            <v-icon>mdi-delete</v-icon>
                        </VBtn>
                    </template>

                    <template v-if="activeRename">
                        <VBtn
                            v-bind="props"
                            :size="$STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE"
                            variant="text"
                            @click.stop="
                                $ACTION_MANAGER.pushAction(
                                    new Actions.Click.ClickAction(
                                        <any>$event,
                                        config,
                                        handlerUpdateProjectElement()
                                    )
                                )
                            "
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
                        <input v-model="newName" />
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
                                <v-menu
                                    @mouseenter="handleMenuMouseEnter"
                                    @mouseleave="handleMenuMouseLeave"
                                >
                                    <template #activator="{ props }">
                                        <VBtn
                                            v-bind="props"
                                            :size="
                                                $STYLE_VARIBLES.NAVIGATION
                                                    .BTN_ICON_SIZE
                                            "
                                            variant="text"
                                        >
                                            <VIcon>mdi-plus</VIcon>
                                        </VBtn>
                                    </template>

                                    <NavigatorCard :elevation="1">
                                        <NavigatorList>
                                            <v-list-item
                                                @click.stop="
                                                    $ACTION_MANAGER.pushAction(
                                                        new Actions.Click.ClickAction(
                                                            <any>$event,
                                                            config,
                                                            handlerCreatePageElement
                                                        )
                                                    )
                                                "
                                            >
                                                <template #prepend>
                                                    <div class="mr-2">
                                                        <v-icon
                                                            >mdi-list-box-outline</v-icon
                                                        >
                                                    </div>
                                                </template>
                                                <template #title>
                                                    <div class="font-xs">
                                                        Создать страницу
                                                    </div>
                                                </template>
                                            </v-list-item>
                                            <v-list-item
                                                @click.stop="
                                                    $ACTION_MANAGER.pushAction(
                                                        new Actions.Click.ClickAction(
                                                            <any>$event,
                                                            config,
                                                            handlerCreateFolderElement
                                                        )
                                                    )
                                                "
                                            >
                                                <template #prepend>
                                                    <div class="mr-2">
                                                        <v-icon
                                                            >mdi-folder-outline</v-icon
                                                        >
                                                    </div>
                                                </template>
                                                <template #title>
                                                    <div class="font-xs">
                                                        Создать папку
                                                    </div>
                                                </template>
                                            </v-list-item>
                                        </NavigatorList>
                                    </NavigatorCard>
                                </v-menu>

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
                                    @click.stop="
                                        $ACTION_MANAGER.pushAction(
                                            new Actions.Click.ClickAction(
                                                <any>$event,
                                                config,
                                                handlerDeleteProjectElement
                                            )
                                        )
                                    "
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
                                    @click.stop="
                                        $ACTION_MANAGER.pushAction(
                                            new Actions.Click.ClickAction(
                                                <any>$event,
                                                config,
                                                handlerUpdateProjectElement()
                                            )
                                        )
                                    "
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
                                <input v-model="newName" />
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
