import { STYLE_VARIBLES } from "./varibles";
import { type App } from "vue";
import { GlobalProperties } from "@/plugins/globalProperties.enum";

export default {
  install(app: App): void {
    app.config.globalProperties[GlobalProperties.$STYLE_VARIBLES] =
      STYLE_VARIBLES;
  },
};
