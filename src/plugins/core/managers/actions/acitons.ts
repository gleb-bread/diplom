import type { App } from 'vue';
import { Managers } from '@/shared/managers';
import { GlobalProperties } from '@/plugins/globalProperties.enum';
import { useSettingsStore } from '@/app/stores/settings';

export const __init__actions__manager__ = function (app: App) {
    const manager = new Managers.Actions.Actions();
    const settingsStore = useSettingsStore();

    app.config.globalProperties[GlobalProperties.$ACTION_MANAGER] = manager;

    settingsStore.setActionManager(manager);
};
