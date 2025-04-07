import { AHandler } from './AHandler';
import { useComponentStore } from '@/app/stores/components';
import * as Types from '@/shared/types';

export class UpdateApiComponentData extends AHandler {
    private _apiComponentData: Types.Component.AnyApiComponentDataModel;
    private _componentStore: ReturnType<typeof useComponentStore>;
    private _componentId: number;

    constructor(
        componentId: number,
        component: Types.Component.AnyApiComponentDataModel
    ) {
        super();

        this._apiComponentData = component;
        this._componentId = componentId;
        this._componentStore = useComponentStore();
    }

    public __handle(): void {
        this._componentStore.updateApiComponentData(
            this._componentId,
            this._apiComponentData
        );
    }
}
