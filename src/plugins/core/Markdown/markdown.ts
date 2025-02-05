import type { App } from 'vue';
import { Markdown } from '@/shared/helpers/markdown';
import { GlobalProperties } from '@/plugins/globalProperties.enum';
import { useSettingsStore } from '@/app/stores/settings';

export const __init__markdown__ = function (app: App) {
    const markdown = new Markdown();
    const settingsStore = useSettingsStore();

    app.config.globalProperties[GlobalProperties.$MARKDOWN] = markdown;

    settingsStore.setMarkdown(markdown);
};
