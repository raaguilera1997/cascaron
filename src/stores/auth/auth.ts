import {defineStore} from 'app/node_modules/pinia';
import {Router} from "src/infrastructure/router/index"
import DefaultResponseModel from "src/domain/models/response/DefaultResponseModel";
import {notify} from "src/infrastructure/services/VisualNotifyService";
import {BasicLogin} from "src/core/modules/external-security/Login/infrastructure/controllers/LoginController";
export interface AuthStateInterface {
  token: string | null;
  refreshToken: string | null;
}

export const auth = defineStore('auth', {
  state: (): AuthStateInterface => {
    return {
      token: null,
      refreshToken: null
    };
  },
  getters: {
    GetToken(state) {
      return state.token;
    },
    GetRefreshToken(state) {
      return state.refreshToken;
    }
  },
  actions:{
    async BasicLogin(
      payload: { email: string; password: string }
    ) {
      // @ts-ignore
        const data = await BasicLogin({
          email: payload.email,
          password: payload.password
        }).then(resp=>{
             return resp
        }).catch (error=> {
        notify({
          type: "negative",
          //@ts-ignore
          content: error.response.data.errorMessages[0]
        });
      })
    }
  },
  persist: {
    storage: localStorage,
    paths: ['token', 'refreshToken'],
  },
});
