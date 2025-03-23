import { AHandler } from './AHandler';
import { useComponentStore } from '@/app/stores/components';
import * as Types from '@/shared/types';

export class CreateNewComponent extends AHandler {
    private _pageId: string;
    private _componentStore: ReturnType<typeof useComponentStore>;

    public KeyboardKeys?: Types.Key.KeyboardKeys[] | undefined = ['Enter'];

    constructor(pageId: string) {
        super();

        this._pageId = pageId;
        this._componentStore = useComponentStore();
    }

    public __handle(): void {
        this._componentStore.pushNewElement(this._pageId);
    }
}
