<script setup lang="ts">
import IconItem from './IconItem.vue';
const props = defineProps<{ isHovering: boolean | null }>();
</script>

<template>
    <div class="icons">
        <v-responsive>
            <v-fade-transition>
                <v-responsive width="62">
                    <template v-if="isHovering">
                        <icon-item icon="mdi-plus"></icon-item>

                        <icon-item icon="mdi-dots-grid"></icon-item>
                    </template>
                </v-responsive>
            </v-fade-transition>
        </v-responsive>
    </div>
</template>
