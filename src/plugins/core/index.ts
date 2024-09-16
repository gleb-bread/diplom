import type { App } from "vue";
import { __init__lang__ } from "./lang";

export const __init__ = {
  install(app: App) {
    __init__lang__(app);
  },
};
