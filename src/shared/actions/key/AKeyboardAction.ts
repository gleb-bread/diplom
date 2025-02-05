import { AAction } from '../AAction';
import { AHandler } from '../../handlers/AHandler';

export abstract class AKeyboardAction extends AAction {
    private _event: KeyboardEvent;

    constructor(event: KeyboardEvent, ...args: AHandler[]) {
        super(...args);

        this._event = event;
    }

    protected get event() {
        return this._event;
    }

    public handle(): void {
        for (const handler of this.handlers) {
            if (!handler.KeyboardKeys) handler.__handle();
            else if (handler.KeyboardKeys.includes(this._event.key))
                handler.__handle();
        }
    }
}
