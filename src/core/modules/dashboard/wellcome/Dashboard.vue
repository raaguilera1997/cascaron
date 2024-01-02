<template>
    <h1>Dashboard</h1>
  <q-btn label="Prob" @click="auth"></q-btn>
</template>

<script>
  import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
  export default {
        name: "Dashboard-Wellcome",
         methods:{
           auth(){
             signInWithEmailAndPassword(getAuth(), 'test@abc.com', 'password').then((data)=>{
                 debugger
              }).catch((err)=>{
                debugger
              })
          }
    }
  }
</script>

<style scoped>

</style>
