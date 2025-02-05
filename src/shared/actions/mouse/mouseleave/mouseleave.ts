import * as Types from '@/shared/types';
import { AHandler } from '@/shared/handlers/AHandler';
import { Config } from '@/shared/config/actions/actions';
import { AMouseAcition } from '../AMouseAction';

export class MouseleaveAction extends AMouseAcition {
    protected action: Types.ActionAPI.Actions.ActionTypes = 'mouseleave';
    protected config: Config;

    constructor(event: MouseEvent, config: Config, ...args: AHandler[]) {
        super(event, ...args);
        this.config = config;
    }
}
