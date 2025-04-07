<script lang="ts" setup>
import type { Props } from '../props';
import { computed, defineComponent } from 'vue';
import { useComponentStore } from '@/app/stores/components';
import * as Models from '@/entities/models';
import { Handlers } from '@/shared/handlers';
import { Actions } from '@/shared/actions';
import { Config } from '@/shared/config';
import * as Types from '@/shared/types';

const nameComponent = 'apiCookieComponent';

defineComponent({ name: nameComponent });

const props = defineProps<Props>();

const componentStore = useComponentStore();

const config = new Config.Actions.Config(nameComponent);

const component = computed(
    () =>
        <Models.ApiComponent>(
            componentStore.getComponents[props.pageId]?.[props.componentId]
        )
);

const handlerAddApiComponentCookie = new Handlers.CreateNewApiCompnentData(
    component.value.component_id,
    Types.Component.ApiComponentDataTypes.COOKIE
);

const handlerDeleteApiCompoentCookie = (cookie: Models.ApiComponentCookie) => {
    return new Handlers.DeleteApiComponentData(
        component.value.component_id,
        cookie
    );
};

const handlerUpdateApiComponentCookie = (cookie: Models.ApiComponentCookie) => {
    return new Handlers.UpdateApiComponentData(
        component.value.component_id,
        cookie
    );
};

const updateCookieKey = async function (
    cookie: Models.ApiComponentCookie,
    event: string
) {
    cookie.key = event;
    handlerUpdateApiComponentCookie(cookie).__handle();
};

const updateCookieValue = async function (
    cookie: Models.ApiComponentCookie,
    event: string
) {
    cookie.value = event;
    handlerUpdateApiComponentCookie(cookie).__handle();
};

const cookies = computed(() => component.value.cookies ?? []);
</script>

<template>
    <v-expansion-panel
        :color="$STYLE_VARIBLES.COLOR.BACKGROUND"
        title="Cookies"
    >
        <v-expansion-panel-text class="bg-background">
            <div
                v-for="(cookie, index) in cookies"
                :key="index"
                class="d-flex align-center mb-2"
            >
                <v-text-field
                    density="compact"
                    :model-value="cookie.key"
                    @update:model-value="updateCookieKey(cookie, $event)"
                    label="Ключ"
                    variant="outlined"
                    class="mr-2"
                />
                <v-text-field
                    density="compact"
                    :model-value="cookie.value"
                    @update:model-value="updateCookieValue(cookie, $event)"
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
                                handlerDeleteApiCompoentCookie(cookie)
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
                            handlerAddApiComponentCookie
                        )
                    )
                "
            >
                Добавить cookie
            </v-btn>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style scoped></style>
