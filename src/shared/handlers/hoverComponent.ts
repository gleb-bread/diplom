import { AHandler } from './AHandler';
import { useComponentStore } from '@/app/stores/components';

export class HoverComponent extends AHandler {
    private _componentId: number;
    private _componentStore: ReturnType<typeof useComponentStore>;

    constructor(componentId: number) {
        super();

        this._componentId = componentId;
        this._componentStore = useComponentStore();
    }

    public __handle(): void {
        this._componentStore.setFocusComponent(this._componentId);
    }
}
