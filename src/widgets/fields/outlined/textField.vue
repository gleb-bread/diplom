<script lang="ts" setup>
import type { PropsField } from '../props';

const model = defineModel<string>({required: true});
const props = defineProps<PropsField>();

</script>

<template>
    <outlined-text-field 
        type="text" 
        :prepend-inner-icon="props.prependIcon"
        v-model="model" 
         :rules="props.rules"
        :label="props.label"> 
    </outlined-text-field>
</template>