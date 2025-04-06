<script lang="ts" setup>
import accountList from './pageHeader/accountList.vue';
import projectList from './pageHeader/projectList.vue';
</script>

<template>
    <v-app-bar
        :color="$STYLE_VARIBLES.COLOR.BACKGROUND"
        :elevation="$STYLE_VARIBLES.HEADERS.DEFAULT.ELEVATION"
        class="border-b-sm page-menu"
    >
        <template #title>
            <v-list
                :bg-color="$STYLE_VARIBLES.COLOR.BACKGROUND"
                class="d-flex py-0 h-100"
            >
                <v-list-item class="border-e-sm" width="270">
                    {{ $WORDS.LOGO }}
                </v-list-item>
                <projectList />
            </v-list>
        </template>

        <template v-slot:append>
            <accountList />
        </template>
    </v-app-bar>
</template>

<style lang="scss">
.page-menu .v-toolbar__content .v-toolbar-title {
    height: 100%;

    & .v-toolbar-title__placeholder {
        height: 100%;
    }
}
</style>
