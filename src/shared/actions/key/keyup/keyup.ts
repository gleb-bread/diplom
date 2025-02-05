import * as Types from '@/shared/types';
import { AHandler } from '@/shared/handlers/AHandler';
import { Config } from '@/shared/config/actions/actions';
import { AKeyboardAction } from '../AKeyboardAction';

export class KeyupAction extends AKeyboardAction {
    protected action: Types.ActionAPI.Actions.ActionTypes = 'keyup';
    protected config: Config;

    constructor(event: KeyboardEvent, config: Config, ...args: AHandler[]) {
        super(event, ...args);
        this.config = config;
    }
}
