import {defineStore} from 'app/node_modules/pinia';
import {Router} from "src/infrastructure/router/index"
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
  persist: {
    storage: localStorage,
    paths: ['token', 'refreshToken'],
  },
});
