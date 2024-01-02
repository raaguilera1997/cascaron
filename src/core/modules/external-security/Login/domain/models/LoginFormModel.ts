// Global
// Inputs complementary
import { required, email } from "src/infrastructure/statics/InputsRulesValidation"
import { _email_message_ } from "src/infrastructure/statics/InputsMessageValidation"

// Local interfaces Inputs
import {IDefaultInput} from "src/core/interfaces/interfaces"
import {IPasswordInput} from "src/core/interfaces/interfaces"

export default class LoginFormModel {
  email: IDefaultInput;
  password: IPasswordInput;

  constructor () {
    this.email = {
      label: "Type your email address *",
      maxLength: 255,
      value: "",
      icon: "las la-envelope",
      rules: [required, email]
    }
    this.password = {
      label: "Type your password  *",
      maxLength: 255,
      value: "",
      icon: "las la-key",
      show: false,
      rules: [required]
    }
  }

  CleanFormInputsValue () {
    this.email.value = ""
    this.password.value = ""
  }
}
