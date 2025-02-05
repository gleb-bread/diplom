import * as Types from '@/shared/types';
import { AHandler } from '@/shared/handlers/AHandler';
import { Config } from '@/shared/config/actions/actions';
import { AClick } from '../AClick';

export class ClickAction extends AClick {
    protected action: Types.ActionAPI.Actions.ActionTypes = 'mouseover';
    protected config: Config;

    constructor(event: PointerEvent, config: Config, ...args: AHandler[]) {
        super(event, ...args);
        this.config = config;
    }
}
