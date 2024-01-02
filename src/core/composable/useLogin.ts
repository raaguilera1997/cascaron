// @ts-ignore
// import { user as user_store } from 'src/stores/user/user'
import { auth as auth_store } from 'src/stores/auth/auth'
export const useLogin=()=>{
  // const useStoreUser = user_store();
  const useStoreAuth = auth_store();
  const token=useStoreAuth.token
  const refreshToken =useStoreAuth.refreshToken
  // const user =useStoreUser.user
  // const userLogging =useStoreUser.userLogging
   const userData:any=null
  // const submitData=async(email:any,password:any)=>{
  //   const result = await useStoreAuth.BasicLogin({
  //     email: email,
  //     password:password
  //   });
  //   if (result.statusCode == 200) {
  //     //ok
  //     userData = await useStoreUser.GetUserData();
  //
  //   }
  //   return userData
  //
  // }
  // const signout=()=>useStoreAuth.signout()
  // const refreshTokenAction=()=>useStoreAuth.refreshTokenAction()
  // const HavePermision=(code:string)=>useStoreUser.HavePermision(code)
  return {
    // refreshTokenAction,
    token,
    refreshToken,
    // signout,
    // submitData
  }
}
