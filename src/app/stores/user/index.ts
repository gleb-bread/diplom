import { defineStore } from "pinia";
import { initState } from "./state";
import { initGetters } from "./getters";
import { initActions } from "./actions";

export const useUserStore = defineStore("user", () => {
  const state = initState();

  const Getters = initGetters(state);

  const Actions = initActions(state);

  return {
    ...Getters,
    ...Actions,
  };
});
