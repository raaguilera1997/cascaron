// Local interfaces
import {ILoginParamsForm} from "../interfaces/interfaces"

export default class LoginSubmitDataModel {
  email: string;
  password: string;

  grantType: string;
  refreshToken: string;
  scope: string;

  constructor (params: ILoginParamsForm) {
    this.email = params.email
    this.password = params.password

    // Send this params to default in future this would change
    this.grantType = "userandpassword"
    this.refreshToken = "notused"
    //@ts-ignore
    this.scope = this.$VUE_CONFIG_BO_APP_KEY
  }
}
