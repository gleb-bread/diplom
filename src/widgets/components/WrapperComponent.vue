<script lang="ts" setup>
import IconsBlock from './WrapperComponent/IconsBlock.vue';
import { useComponentStore } from '@/app/stores/components';
import type { Props } from './props';
import { computed, defineComponent } from 'vue';
import { Actions } from '@/shared/actions';
import { Config } from '@/shared/config';
import { Handlers } from '@/shared/handlers';

const nameComponent = 'WrapperComponent';

defineComponent({ name: nameComponent });

const config = new Config.Actions.Config(nameComponent);

const props = defineProps<Props>();

const handlerHoverComponentWrapper = new Handlers.HoverComponent(
    props.componentId
);

const componentStore = useComponentStore();

const handlerCreateComponent = new Handlers.CreateNewComponent(props.pageId);
const handlerSaveUpdateComponent = new Handlers.SaveUpdateComponent(
    props.componentId
);

const componentId = computed(() =>
    componentStore.getComponentHashById(props.componentId)
);

const getFocus = computed({
    get() {
        return componentId.value == componentStore.getFocusComponentHash;
    },

    set(v: boolean) {},
});
</script>

<template>
    <v-hover :model-value="getFocus">
        <template #default="{ isHovering, props }">
            <v-responsive
                @click.stop="
                    $ACTION_MANAGER.pushAction(
                        new Actions.Click.ClickAction(
                            $event,
                            config,
                            handlerHoverComponentWrapper
                        )
                    )
                "
                min-height="62"
                class="py-4"
                v-bind="props"
            >
                <div class="wrapper tran-all tran-3 h-100 d-flex align-center">
                    <icons-block :is-hovering="isHovering"></icons-block>
                    <div
                        class="main h-100 w-100"
                        @keyup.stop="
                            $ACTION_MANAGER.pushAction(
                                new Actions.Keyboard.Keyup.KeyupAction(
                                    $event,
                                    config,
                                    handlerSaveUpdateComponent
                                )
                            )
                        "
                    >
                        <slot :is-active="getFocus"></slot>
                    </div>
                </div>
            </v-responsive>
        </template>
    </v-hover>
</template>
