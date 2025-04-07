import { AHandler } from './AHandler';
import { useComponentStore } from '@/app/stores/components';
import * as Types from '@/shared/types';

export class CreateNewApiCompnentData extends AHandler {
    private _componentId: number;
    private _type: Types.Component.ApiComponentDataTypes;
    private _componentStore: ReturnType<typeof useComponentStore>;

    constructor(
        componentId: number,
        type: Types.Component.ApiComponentDataTypes
    ) {
        super();

        this._componentId = componentId;
        this._type = type;
        this._componentStore = useComponentStore();
    }

    public __handle(): void {
        this._componentStore.addApiComponentData(this._componentId, this._type);
    }
}
