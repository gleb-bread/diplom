import { getLang } from "@/shared/system/lang";
import type { App } from "vue";
import { GlobalProperties } from "@/plugins/globalProperties.enum";

export const __init__lang__ = function (app: App) {
  const Languages = getLang();
  app.config.globalProperties[GlobalProperties.$WORDS] = Languages.WORDS;
};
