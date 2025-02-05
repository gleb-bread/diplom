import * as Services from '@/entities/services';
import { initState } from './state';
import { Actions } from '@/shared/managers/actions/actions';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setActionManager = function (manager: Actions) {
        state.ActionManager.value = manager;
    };

    return { setActionManager };
};
