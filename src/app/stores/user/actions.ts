import { initState } from "./state";
import type { Languages } from "@/shared/system/lang/type";

export const initActions = function (state: ReturnType<typeof initState>) {
  const setAuthToken = function (token: string) {
    state.authToken.value = token;
  };

  const setLangToken = function (token: Languages) {
    state.langToken.value = token;
  };

  return { setAuthToken, setLangToken };
};
