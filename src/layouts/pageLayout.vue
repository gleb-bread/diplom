<script lang="ts" setup>
import pageNavigation from './navigation/pageNavigation.vue';
import pageHeader from './headers/pageHeader.vue';
</script>

<template>
    <v-responsive>
        <v-app>
            <pageHeader />
            <page-navigation></page-navigation>
            <v-main>
                <slot name="main"></slot>
            </v-main>
        </v-app>
    </v-responsive>
</template>
