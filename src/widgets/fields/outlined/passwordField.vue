<script lang="ts" setup>
import {ref} from 'vue';
import type { PropsPassword } from '../props';

const password = defineModel<string>({required: true});

const visible = ref<boolean>(false);

const props = defineProps<PropsPassword>();

</script>

<template>
    <outlined-text-field  
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" 
        prepend-inner-icon="mdi-lock-outline" 
        :type="visible ? 'text' : 'password'" 
        v-model="password" 
        :rules="props.rules"
        @click:append-inner="visible = !visible"
        :label="props.label">
    </outlined-text-field>
</template>