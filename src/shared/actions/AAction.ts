import * as Types from '@/shared/types';
import { AConfig } from '../config/AConfig';
import { AHandler } from '../handlers/AHandler';

export abstract class AAction {
    protected abstract action: Types.ActionAPI.Actions.ActionTypes;
    protected abstract config: AConfig;
    protected handlers: AHandler[];

    constructor(...args: AHandler[]) {
        this.handlers = args;
    }

    public handle() {
        for (const handler of this.handlers) {
            handler.__handle();
        }
    }
}
