<script lang="ts" setup>
import { useProjectElements } from '@/app/stores/projectElements';
import { useComponentStore } from '@/app/stores/components';
import { computed, defineComponent } from 'vue';
import FactoryComponent from '@/widgets/components/FactoryComponent.vue';
import { Actions } from '@/shared/actions';
import { Config } from '@/shared/config';
import { Handlers } from '@/shared/handlers';

const nameComponent = 'WrapperComponent';

defineComponent({ name: nameComponent });

const config = new Config.Actions.Config(nameComponent);

const componentStore = useComponentStore();
const pageStore = useProjectElements();

const getSelectPage = computed(() => pageStore.getSelectPage);
const handlerCreateComponent = () =>
    new Handlers.CreateNewComponent(getSelectPage.value);

const getComponentIds = computed(() => {
    return componentStore.getGenericList[getSelectPage.value];
});
</script>

<template>
    <v-list
        @click.stop="
            $ACTION_MANAGER.pushAction(
                new Actions.Click.ClickAction(
                    $event,
                    config,
                    handlerCreateComponent()
                )
            )
        "
        :bg-color="$STYLE_VARIBLES.COLOR.BACKGROUND"
        class="px-2 h-100"
    >
        <template v-for="id in getComponentIds" :key="`component${id}`">
            <factory-component :component-id="id" :page-id="getSelectPage">
            </factory-component>
        </template>
    </v-list>
</template>
