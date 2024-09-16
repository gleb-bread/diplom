import type { App } from "vue"
import { Helper } from "@/shared/helpers"
import { GlobalProperties } from "@/plugins/globalProperties.enum";

export const __init__helper__ = function(app: App){
    app.config.globalProperties[GlobalProperties.$HELPER] = Helper;
}