// Global Adapters
// import { API_REST_POST_REQUEST } from "src/infrastructure/adapters/IdentityRestApiAdapter";
import { API_REST_POST_REQUEST } from "src/infrastructure/adapters/BoRestApiAdapter";
import DefaultResponseModel from "src/domain/models/response/DefaultResponseModel";

// Local Models
import LoginSubmitDataModel from "../../domain/models/LoginSubmitDataModel";

// Local errors
import ErrorUserInvalidCredential from "../../domain/errors/ErrorUserInvalidCredential";

// Local interfaces
import {ILoginParamsForm} from "../../domain/interfaces/interfaces";

export async function ValidateLogin(params: ILoginParamsForm) {
  return true

}
