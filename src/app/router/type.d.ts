import type { RouteMeta, RouteNamedMap } from "vue-router";
import { router } from "./router";
import { RoutersNames } from "./routersNames.enum";

declare module "vue-router" {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap;
  }

  interface RouteMeta {
    requiresAuth?: boolean;
    workspace?: boolean;
  }

  interface RouteNamedMap {
    [RoutersNames.HOME]: RouteRecordInfo<
      `${[RoutersNames.HOME]}`,
      "/",
      Record<never, never>,
      Record<never, never>
    >;
    [RoutersNames.REG]: RouteRecordInfo<
      `${[RoutersNames.REG]}`,
      "/reg",
      Record<never, never>,
      Record<never, never>
    >;
  }
}

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $router: typeof router.currentRoute.value;
  }
}
