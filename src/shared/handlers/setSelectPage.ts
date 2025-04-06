import { AHandler } from './AHandler';
import { useProjectElements } from '@/app/stores/projectElements';
import * as Types from '@/shared/types';

export class SetSelectPage extends AHandler {
    private _element: Types.Project.AnyProjectModels;
    private _projectElementsStore: ReturnType<typeof useProjectElements>;

    constructor(element: Types.Project.AnyProjectModels) {
        super();

        this._element = element;
        this._projectElementsStore = useProjectElements();
    }

    public __handle(): void {
        this._projectElementsStore.setSelectPage(this._element);
    }
}
