import { AHandler } from './AHandler';
import { useComponentStore } from '@/app/stores/components';
import * as Types from '@/shared/types';

export class SaveUpdateComponent extends AHandler {
    private _componentStore: ReturnType<typeof useComponentStore>;
    private _componentId: number;

    public KeyboardKeys?: Types.Key.KeyboardKeys[] | undefined = undefined;

    constructor(componentId: number) {
        super();

        this._componentId = componentId;
        this._componentStore = useComponentStore();
    }

    public __handle(): void {
        this._componentStore.saveUpdateComponent(this._componentId);
    }
}
