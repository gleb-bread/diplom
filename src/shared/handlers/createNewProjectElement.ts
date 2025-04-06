import { AHandler } from './AHandler';
import { useProjectStore } from '@/app/stores/project';
import * as Types from '@/shared/types';

export class CreateNewProjectElement extends AHandler {
    private _folder_id: string | null;
    private _projectStore: ReturnType<typeof useProjectStore>;
    private _type: Types.Project.ElementTypes;

    constructor(
        type: Types.Project.ElementTypes,
        folderId: string | null = null
    ) {
        super();

        this._type = type;
        this._folder_id = folderId;
        this._projectStore = useProjectStore();
    }

    public __handle(): void {
        this._projectStore.createElement(this._type, this._folder_id);
    }
}
