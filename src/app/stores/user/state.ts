import { ref } from "vue";
import type { Languages } from "@/shared/system/lang/type";

export const initState = function () {
  const authToken = ref<string>("");
  const langToken = ref<Languages>("ru");

  return { authToken, langToken };
};
