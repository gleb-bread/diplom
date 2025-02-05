import type { App } from 'vue';
import { __init__lang__ } from './lang';
import { __init__helper__ } from './helper';
import { Managers } from './managers';
import * as ScriptsSystem from '@/shared/system/scripts';

export const __init__ = {
    install(app: App) {
        __init__lang__(app);
        __init__helper__(app);
        Managers.Action.__init__actions__manager__(app);
        ScriptsSystem.StartAPI.__start__();
    },
};
