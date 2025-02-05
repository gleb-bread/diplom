import { AAction } from '../AAction';
import { AHandler } from '../../handlers/AHandler';

export abstract class AClick extends AAction {
    private _event: PointerEvent;

    constructor(event: PointerEvent, ...args: AHandler[]) {
        super(...args);

        this._event = event;
    }

    protected get event() {
        return this._event;
    }
}
