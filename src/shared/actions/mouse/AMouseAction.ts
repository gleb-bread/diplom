import { AAction } from '../AAction';
import { AHandler } from '../../handlers/AHandler';

export abstract class AMouseAcition extends AAction {
    private _event: MouseEvent;

    constructor(event: MouseEvent, ...args: AHandler[]) {
        super(...args);

        this._event = event;
    }

    protected get event() {
        return this._event;
    }
}
