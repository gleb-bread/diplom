import { AHandler } from './AHandler';
import { useProjectStore } from '@/app/stores/project';
import * as Types from '@/shared/types';

export class UpdateProjectElement extends AHandler {
    private _element: Types.Project.AnyProjectModels;
    private _projectStore: ReturnType<typeof useProjectStore>;

    constructor(element: Types.Project.AnyProjectModels) {
        super();

        this._element = element;
        this._projectStore = useProjectStore();
    }

    public __handle(): void {
        this._projectStore.updateElement(this._element);
    }
}
