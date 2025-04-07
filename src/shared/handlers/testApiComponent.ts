import { AHandler } from './AHandler';
import { useComponentStore } from '@/app/stores/components';
import * as Types from '@/shared/types';

export class TestApiComponent extends AHandler {
    private _component: Types.Component.AnyComponentModel;
    private _componentStore: ReturnType<typeof useComponentStore>;

    constructor(component: Types.Component.AnyComponentModel) {
        super();

        this._component = component;
        this._componentStore = useComponentStore();
    }

    public __handle(): void {
        this._componentStore.testApiComponent(this._component);
    }
}
