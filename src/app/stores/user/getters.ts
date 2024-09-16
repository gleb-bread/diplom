import { computed } from "vue";
import { initState } from "./state";

export const initGetters = function (state: ReturnType<typeof initState>) {
  const getAuthToken = computed(() => state.authToken.value);
  const getLangToken = computed(() => state.langToken.value);

  return { getAuthToken, getLangToken };
};
