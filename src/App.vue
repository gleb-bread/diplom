<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import defaultLayout from "./layouts/defaultLayout.vue";
</script>

<template>
  <defaultLayout>
    <template #main>
      <RouterView />
    </template>
  </defaultLayout>
</template>

<style scoped></style>
