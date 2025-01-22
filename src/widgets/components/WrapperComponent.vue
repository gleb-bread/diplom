<script lang="ts" setup>
import IconsBlock from './WrapperComponent/IconsBlock.vue';
</script>

<template>
    <v-hover>
        <template #default="{ isHovering, props }">
            <v-responsive min-height="62" class="py-4" v-bind="props">
                <div class="wrapper tran-all tran-3 h-100 d-flex align-center">
                    <icons-block :is-hovering="isHovering"></icons-block>
                    <div class="main h-100">
                        <slot :is-hovering="isHovering"></slot>
                    </div>
                </div>
            </v-responsive>
        </template>
    </v-hover>
</template>
