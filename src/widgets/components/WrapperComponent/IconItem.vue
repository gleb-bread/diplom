<script lang="ts" setup>
const props = defineProps<{ icon: string }>();
</script>

<template>
    <v-btn size="30" variant="text">
        <v-icon>
            {{ icon }}
        </v-icon>
    </v-btn>
</template>
