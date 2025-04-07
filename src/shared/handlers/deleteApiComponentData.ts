import { AHandler } from './AHandler';
import { useComponentStore } from '@/app/stores/components';
import * as Types from '@/shared/types';

export class DeleteApiComponentData extends AHandler {
    private _apiComponentData: Types.Component.AnyApiComponentDataModel;
    private _componentId: number;
    private _componentStore: ReturnType<typeof useComponentStore>;

    constructor(
        componentId: number,
        component: Types.Component.AnyApiComponentDataModel
    ) {
        super();

        this._apiComponentData = component;
        this._componentStore = useComponentStore();
        this._componentId = componentId;
    }

    public __handle(): void {
        this._componentStore.deleteApiComponentData(
            this._componentId,
            this._apiComponentData
        );
    }
}
