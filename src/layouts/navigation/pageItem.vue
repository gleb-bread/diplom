<script lang="ts" setup>
import type { ItemProps } from './props';
import { useProjectElements } from '@/app/stores/projectElements';
import { computed, ref, defineComponent } from 'vue';
import { Helper } from '@/shared/helpers';
import { Actions } from '@/shared/actions';
import { Config } from '@/shared/config';
import { Handlers } from '@/shared/handlers';

const nameComponent = 'pageItem';

defineComponent({ name: nameComponent });

const config = new Config.Actions.Config(nameComponent);

const props = defineProps<ItemProps>();
const projectElements = useProjectElements();

const getTitle = computed(
    () => (idPage: string) => projectElements.getElements[idPage].name
);

const newName = ref('');

const getElement = computed(() => projectElements.getElements[props.itemId]);

const handlerUpdateProjectElement = () => {
    activeRename.value = false;
    getElement.value.name = newName.value;
    return new Handlers.UpdateProjectElement(getElement.value);
};

const handlerDeleteProjectElement = new Handlers.DeleteProjectElement(
    getElement.value
);

const handlerSetSelectPage = new Handlers.SetSelectPage(getElement.value);

const { isActive, handleMouseEnter, handleMouseLeave } =
    Helper.ComponentsAPI.mouseOverHandler(0);

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
</script>

<template>
    <v-list-item
        @click.stop="
            $ACTION_MANAGER.pushAction(
                new Actions.Click.ClickAction(
                    <any>$event,
                    config,
                    handlerSetSelectPage
                )
            )
        "
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
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
                <input v-model="newName" />
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
                    @click.stop="
                        $ACTION_MANAGER.pushAction(
                            new Actions.Click.ClickAction(
                                <any>$event,
                                config,
                                handlerDeleteProjectElement
                            )
                        )
                    "
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
    </v-list-item>
</template>
