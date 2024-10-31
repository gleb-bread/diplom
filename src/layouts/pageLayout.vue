<script lang="ts" setup>
import pageNavigation from './navigation/pageNavigation.vue';
</script>

<template>
    <v-responsive>
        <v-app>
            <page-navigation></page-navigation>
            <v-main>
                <slot name="main"></slot>
            </v-main>
        </v-app>
    </v-responsive>
</template>
