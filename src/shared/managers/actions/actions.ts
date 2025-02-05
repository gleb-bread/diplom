import { AAction } from '@/shared/actions/AAction';

export class Actions {
    private actions: AAction[] = [];

    pushAction(action: AAction) {
        this.actions.push(action);
        action.handle();
    }
}
