import {defineStore} from 'app/node_modules/pinia';
import {getAuth, signInWithEmailAndPassword} from "app/node_modules/firebase/auth";
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
       return signInWithEmailAndPassword(getAuth(),payload.email,payload.password).then((response:any)=>{
        this.token=response._tokenResponse.idToken
        this.refreshToken=response._tokenResponse.refreshToken
        return 200
      }).catch((err)=>{
        return 401
      })
    }
  },
  persist: {
    storage: localStorage,
    paths: ['token', 'refreshToken'],
  },
});
