<script lang="ts" setup>
import defaultHeader from "./headers/defaultHeader.vue";
</script>

<template>
  <v-responsive>
    <v-app>
      <template v-if="!$router.meta?.workspace">
        <default-header></default-header>
      </template>

      <v-main>
        <slot name="main"></slot>
      </v-main>
    </v-app>
  </v-responsive>
</template>
