import { AHandler } from './AHandler';
import { useComponentStore } from '@/app/stores/components';

export class LeaveComponent extends AHandler {
    private _componentStore: ReturnType<typeof useComponentStore>;

    constructor() {
        super();

        this._componentStore = useComponentStore();
    }

    public __handle(): void {
        this._componentStore.restoreFocusComponent();
    }
}
