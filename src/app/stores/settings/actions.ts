import * as Services from '@/entities/services';
import { initState } from './state';
import { Actions } from '@/shared/managers/actions/actions';
import { AMarkdown } from '@/shared/helpers/markdown/AMarkdown';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setActionManager = function (manager: Actions) {
        state.ActionManager.value = manager;
    };

    const setMarkdown = function (markdown: AMarkdown) {
        state.Markdown.value = markdown;
    };

    return { setActionManager, setMarkdown };
};
