import * as Services from '@/entities/services';
import { initState } from './state';
import { Actions } from '@/shared/managers/actions/actions';
import { Markdown } from '@/shared/helpers/markdown';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setActionManager = function (manager: Actions) {
        state.ActionManager.value = manager;
    };

    const setMarkdown = function (markdown: Markdown) {
        state.Markdown.value = markdown;
    };

    return { setActionManager, setMarkdown };
};
