import { initState } from "./state";
import type { Languages } from "@/shared/system/lang/type";
import * as UserTemplatesStore from './template';
import * as Services from '@/entities/services';
import * as Models from "@/entities/models";

export const initActions = function (state: ReturnType<typeof initState>) {
  
  const setAuthToken = function (token: string) {
    state.authToken.value = token;
  };

  const setLangToken = function (token: Languages) {
    state.langToken.value = token;
  };

  const addUser = async function(){
    const service = new Services.User();

    const response = await service.addUser(state.newUser.value);

    if(response.result){
      state.userInfo.value = response.data.user;
      restoreNewUser();
    } else {

    }
  }

  const restoreNewUser = function(){
    state.newUser.value = UserTemplatesStore.newUser();
  }

  return { setAuthToken, setLangToken, addUser };
};
