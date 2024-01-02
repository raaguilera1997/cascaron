<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center q-py-md login-page full-height">
  <div class="row items-center justify-center full-width">
    <div class="col col-xs-12 col-md-4 q-pa-xs">
      <q-form @submit="submit">
        <q-card bordered class="q-pa-sm">
          <q-card-section class="text-center">
<!--            <q-img-->
<!--              src="~assets/Logo.svg"-->

<!--              :img-style="{'background-size': 'contain'}" style="width: 40%;height: 40%;display: block;margin: 0px auto"-->
<!--            />-->
            <h5 class="text-ap-primary-dark q-my-md">Login</h5>
            <input-field class="q-py-sm" v-model="user" label="User">
              <template v-slot:prepend>
                <q-icon name="person" color="ap-primary"/>
              </template>
            </input-field>
            <input-field  class="q-py-sm"  :type="isPwd ? 'password' : 'text'" v-model="pass" label="Password">
              <template v-slot:prepend>
                <q-icon name="lock" color="ap-primary"/>
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  color="ap-primary"
                  @click="isPwd = !isPwd"
                />
              </template>
            </input-field>
<!--            <div class="text-right">-->
<!--              <link-component to="/recovery" class="full-width q-mt-lg q-pt-lg" text="¿ Old Pasword"/>-->
<!--            </div>-->
          </q-card-section>
          <q-card-actions align="center">
            <q-btn class="full-width q-mb-lg"  type="submit" color="ap-primary"
                   label="Login">
              <div class="q-mx-sm" v-if="loading">
                <q-spinner  color="white" size=".5em"></q-spinner>
              </div>
            </q-btn>
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
  import InputField from "../../../../components/inputs/inputField/inputField";
  export default {
  name: 'loginPage',
  components: {
    InputField
  },
  data () {
    return {
      user: null,
      pass: null,
      loading: false,
      error: false,
      unauthorize: false,
      isPwd: true
    }
  },

}
</script>
<style lang="scss">
  .login-page {
    background-color: $ap-primary-light;
    /*background-image: url("~assets/logo.svg");*/
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
  }
</style>
