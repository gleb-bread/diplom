import { Helper } from '@/shared/helpers';
import * as Models from '@/entities/models';
import { ref } from 'vue';
import * as Types from '@/shared/types';
import { Actions } from '@/shared/managers/actions/actions';

export const initState = function () {
    const ActionManager = ref<null | Actions>(null);

    return { ActionManager };
};
