import type { App } from 'vue';
import { Helper } from '@/shared/helpers';
import { GlobalProperties } from '@/plugins/globalProperties.enum';
import { useSettingsStore } from '@/app/stores/settings';

export const __init__markdown__ = function (app: App) {
    const markdown = new Helper.Markdown.DefaultMarkdown();
    const settingsStore = useSettingsStore();

    app.config.globalProperties[GlobalProperties.$MARKDOWN] = markdown;

    settingsStore.setMarkdown(markdown);
};
