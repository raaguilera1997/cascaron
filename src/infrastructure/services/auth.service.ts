// import { API_REST_POST_REQUEST, API_REST_GET_REQUEST } from "src/infrastructure/adapters/BoRestApiAdapter";
// import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
//
// const url = process.env.VUE_CONFIG_BO_API || config.VUE_CONFIG_BO_API;
//
// let clientCode = process.env.VUE_CONFIG_BO_APP_KEY || config.VUE_CONFIG_BO_APP_KEY;
//
// clientCode = clientCode.replace(/"/g, "");
//
// export async function BasicLogin(params: { email: string; password: string }) {
//   return await API_REST_POST_REQUEST({
//     endpoint: "/identity/Login",
//     // endpoint: "/Login",
//     payload: {
//       email: params.email,
//       password: params.password,
//
//       // Send this params to default in future this would change
//       grantType: "userandpassword",
//       refreshToken: "notused",
//       scope: clientCode
//     }
//   })
// }
//
// export async function GetUserDataFromServer() {
//   return await API_REST_GET_REQUEST({
//     endpoint: "/Auth/GetUserInfo"
//   });
// }
//
// export async function RefreshLogin(params: { token: string | null }) {
//
//    //@ts-ignore
//   const api = axios.create({
//
//     baseURL: url.replace(/"/g, ""),
//     timeout: 500000,
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*"
//     }
//   });
//
//   return await api.post("/api/identity/Login", {
//     grantType: "refreshtoken",
//     email: "refreshtoken@greta.com",
//     password: "refreshtoken@greta.com",
//     refreshToken: params.token,
//     scope: clientCode
//   });
//
// }
