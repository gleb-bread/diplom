import { Helper } from '@/shared/helpers';
import * as Models from '@/entities/models';
import { ref } from 'vue';
import * as Types from '@/shared/types';
import { Actions } from '@/shared/managers/actions/actions';
import { AMarkdown } from '@/shared/helpers/markdown/AMarkdown';

export const initState = function () {
    const ActionManager = ref<null | Actions>(null);
    const Markdown = ref<null | AMarkdown>(null);

    return { ActionManager, Markdown };
};
