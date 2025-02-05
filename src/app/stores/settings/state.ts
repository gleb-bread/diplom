import { Helper } from '@/shared/helpers';
import * as Models from '@/entities/models';
import { ref } from 'vue';
import * as Types from '@/shared/types';
import { Actions } from '@/shared/managers/actions/actions';
import { Markdown } from '@/shared/helpers/markdown';

export const initState = function () {
    const ActionManager = ref<null | Actions>(null);
    const Markdown = ref<null | Markdown>(null);

    return { ActionManager, Markdown };
};
