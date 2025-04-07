<script lang="ts" setup>
import type { Props } from '../props';
import { computed, defineComponent } from 'vue';
import { useComponentStore } from '@/app/stores/components';
import * as Models from '@/entities/models';
import { Handlers } from '@/shared/handlers';
import { Actions } from '@/shared/actions';
import { Config } from '@/shared/config';
import * as Types from '@/shared/types';

const nameComponent = 'apiHeadersComponent';

defineComponent({ name: nameComponent });

const config = new Config.Actions.Config(nameComponent);

const props = defineProps<Props>();

const componentStore = useComponentStore();

const component = computed(
    () =>
        <Models.ApiComponent>(
            componentStore.getComponents[props.pageId]?.[props.componentId]
        )
);

const params = computed(() => component.value.params ?? []);

const handlerAddApiComponentParam = new Handlers.CreateNewApiCompnentData(
    component.value.component_id,
    Types.Component.ApiComponentDataTypes.PARAM
);

const handlerDeleteApiCompoentParam = (Param: Models.ApiComponentParam) => {
    return new Handlers.DeleteApiComponentData(
        component.value.component_id,
        Param
    );
};

const handlerUpdateApiComponentParam = (Param: Models.ApiComponentParam) => {
    return new Handlers.UpdateApiComponentData(
        component.value.component_id,
        Param
    );
};

const updateParamKey = async function (
    Param: Models.ApiComponentParam,
    event: string
) {
    Param.key = event;
    handlerUpdateApiComponentParam(Param).__handle();
};

const updateParamValue = async function (
    Param: Models.ApiComponentParam,
    event: string
) {
    Param.value = event;
    handlerUpdateApiComponentParam(Param).__handle();
};
</script>

<template>
    <v-expansion-panel
        :color="$STYLE_VARIBLES.COLOR.BACKGROUND"
        title="Параметры"
    >
        <v-expansion-panel-text class="bg-background">
            <div
                v-for="(param, index) in params"
                :key="index"
                class="d-flex align-center mb-2"
            >
                <v-text-field
                    density="compact"
                    :model-value="param.key"
                    @update:model-value="updateParamKey(param, $event)"
                    label="Ключ"
                    variant="outlined"
                    class="mr-2"
                />
                <v-text-field
                    density="compact"
                    :model-value="param.value"
                    @update:model-value="updateParamValue(param, $event)"
                    label="Значение"
                    variant="outlined"
                    class="mr-2"
                />
                <v-btn
                    density="compact"
                    icon
                    :color="$STYLE_VARIBLES.COLOR.BACKGROUND"
                    @click.stop="
                        $ACTION_MANAGER.pushAction(
                            new Actions.Click.ClickAction(
                                <any>$event,
                                config,
                                handlerDeleteApiCompoentParam(param)
                            )
                        )
                    "
                >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </div>
            <v-btn
                color="primary"
                density="compact"
                @click.stop="
                    $ACTION_MANAGER.pushAction(
                        new Actions.Click.ClickAction(
                            <any>$event,
                            config,
                            handlerAddApiComponentParam
                        )
                    )
                "
            >
                Добавить параметр
            </v-btn>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style scoped></style>
