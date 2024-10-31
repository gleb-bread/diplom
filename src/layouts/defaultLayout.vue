<script lang="ts" setup>
import defaultHeader from './headers/defaultHeader.vue';
</script>

<template>
    <v-responsive>
        <v-app>
            <default-header></default-header>

            <v-main>
                <slot name="main"></slot>
            </v-main>
        </v-app>
    </v-responsive>
</template>
